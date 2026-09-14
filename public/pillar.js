/*
 * The entrance's light pillar: one full-screen quad and a raymarched fragment
 * program on WebGL 2, with nothing in between. It lives outside the React
 * bundle on purpose — a classic script this small arrives and runs long
 * before the runtime and the page chunks have, so the shader can be on
 * screen right after the first paint instead of a beat after hydration.
 *
 * components/LightPillar.tsx renders the host element this runs in, with the
 * shader's parameters as JSON in data-pillar, and calls window.__pillar to
 * start and stop it across client-side navigations. On the first page load
 * the script finds the server-rendered host on its own.
 */
(() => {
  if (window.__pillar) return;

  const QUALITY = {
    // The touch profile: half resolution, a shorter march, 30 fps.
    low: { iterations: 24, waveIterations: 2, pixelRatio: 0.5, stepMultiplier: 1.5, fps: 30 },
    medium: { iterations: 40, waveIterations: 2, pixelRatio: 0.65, stepMultiplier: 1.2, fps: 60 },
  };

  const DEFAULTS = {
    topColor: "#5227FF",
    bottomColor: "#FF9FFC",
    intensity: 1,
    rotationSpeed: 0.3,
    glowAmount: 0.005,
    pillarWidth: 3,
    pillarHeight: 0.4,
    noiseIntensity: 0.5,
    pillarRotation: 0,
    followTheme: false,
  };

  // GLSL ES 3.00 for tanh(); its #version line has to open the source.
  const VERTEX_SHADER = `#version 300 es
    in vec2 aPosition;
    out vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentShader = (settings) => `#version 300 es
    precision mediump float;

    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec3 uTopColor;
    uniform vec3 uBottomColor;
    uniform float uColorBalance;
    uniform float uIntensity;
    uniform float uGlowAmount;
    uniform float uPillarWidth;
    uniform float uPillarHeight;
    uniform float uNoiseIntensity;
    uniform vec2 uRot;
    uniform vec2 uPillarRot;
    uniform vec2 uWave;
    in vec2 vUv;
    out vec4 fragColor;

    const float STEP_MULT = ${settings.stepMultiplier.toFixed(1)};
    const int MAX_ITER = ${settings.iterations};
    const int WAVE_ITER = ${settings.waveIterations};

    void main() {
      // Normalised on the shorter side, so a phone shows the same pillar as
      // a landscape screen cropped to its width instead of a slice through
      // the middle of it, and keeps the colour split (which is measured in
      // these units) where the still stand-in draws it.
      vec2 uv = (vUv * 2.0 - 1.0) * uResolution / min(uResolution.x, uResolution.y);
      uv = vec2(uPillarRot.x * uv.x - uPillarRot.y * uv.y, uPillarRot.y * uv.x + uPillarRot.x * uv.y);

      vec3 ro = vec3(0.0, 0.0, -10.0);
      vec3 rd = normalize(vec3(uv, 1.0));

      float energy = 0.0;
      float t = 0.1;

      for(int i = 0; i < MAX_ITER; i++) {
        vec3 p = ro + rd * t;
        p.xz = vec2(uRot.x * p.x - uRot.y * p.z, uRot.y * p.x + uRot.x * p.z);

        vec3 q = p;
        q.y = p.y * uPillarHeight + uTime;

        float freq = 1.0;
        float amp = 1.0;
        for(int j = 0; j < WAVE_ITER; j++) {
          q.xz = vec2(uWave.x * q.x - uWave.y * q.z, uWave.y * q.x + uWave.x * q.z);
          q += cos(q.zxy * freq - uTime * float(j) * 2.0) * amp;
          freq *= 2.0;
          amp *= 0.5;
        }

        float d = length(cos(q.xz)) - 0.2;
        float bound = length(p.xz) - uPillarWidth;
        float k = 4.0;
        float h = max(k - abs(d - bound), 0.0);
        d = max(d, bound) + h * h * 0.0625 / k;
        d = abs(d) * 0.15 + 0.01;

        energy += 1.0 / d;

        t += d * STEP_MULT;
        if(t > 50.0) break;
      }

      // Hue and brightness are kept apart deliberately. Mixing the two brand
      // colours at every step and saturating each channel afterwards drove
      // red and blue to the ceiling together and washed the whole field
      // magenta. Now a pixel takes one hue off a ramp running along the
      // pillar, and the march only decides how brightly it burns.
      float widthNorm = uPillarWidth / 3.0;
      float glow = tanh(energy * uGlowAmount * uIntensity / widthNorm);

      // Narrow crossover: each end keeps a broad field of its own hue and the
      // muddy midpoint between orange and blue stays a thin seam.
      float ramp = smoothstep(0.32, 0.68, clamp(uv.y * 0.38 + 0.5 + uColorBalance, 0.0, 1.0));
      vec3 col = mix(uBottomColor, uTopColor, ramp) * glow;

      // Only the hottest cores bleach towards white, so they still read as light.
      col = mix(col, vec3(1.0), pow(glow, 8.0) * 0.35);

      col -= fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) / 15.0 * uNoiseIntensity;

      fragColor = vec4(col, 1.0);
    }
  `;

  const UNIFORMS = [
    "uTime",
    "uResolution",
    "uTopColor",
    "uBottomColor",
    "uColorBalance",
    "uIntensity",
    "uGlowAmount",
    "uPillarWidth",
    "uPillarHeight",
    "uNoiseIntensity",
    "uRot",
    "uPillarRot",
    "uWave",
  ];

  // The brand colours are sRGB; the shader multiplies them raw, and it was
  // tuned on their linear values, which are darker and more saturated than
  // the encoded ones.
  const rgb = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    const linear = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return [linear(((n >> 16) & 255) / 255), linear(((n >> 8) & 255) / 255), linear((n & 255) / 255)];
  };
  const rotation = (angle) => [Math.cos(angle), Math.sin(angle)];

  const compile = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  };

  /**
   * Which profile a device gets. A pointer device gets the full one; a touch
   * device the low one; a request for reduced motion keeps the still field
   * for good.
   */
  const tier = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return "none";
    return matchMedia("(pointer: coarse)").matches ? "light" : "full";
  };

  /** host -> teardown for that host's context and loop. */
  const running = new Map();

  const boot = (host, props, settings) => {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "display:block;width:100%;height:100%";
    // A software rasteriser would march this field on the CPU at a few frames
    // a second; the still stand-in is the better deal there, so the context
    // is refused rather than taken, and the stand-in simply stays.
    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
      failIfMajorPerformanceCaveat: true,
    });
    if (!gl) return () => {};
    host.appendChild(canvas);

    // Compiling and linking happen in the GPU process. With this extension
    // the frame loop polls for the result instead of stalling the main
    // thread on it, so the shader costs the page nothing until the first
    // draw.
    const parallel = gl.getExtension("KHR_parallel_shader_compile");
    let program = null;
    let uniforms = null;

    const build = () => {
      const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
      const fs = compile(gl, gl.FRAGMENT_SHADER, fragmentShader(settings));
      program = gl.createProgram();
      uniforms = null;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);

      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    };

    const size = () => {
      const width = Math.max(1, Math.round(host.clientWidth * settings.pixelRatio));
      const height = Math.max(1, Math.round(host.clientHeight * settings.pixelRatio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
      if (uniforms) gl.uniform2f(uniforms.uResolution, width, height);
    };

    // Once linked: bind the quad and set every uniform that never changes.
    const link = () => {
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("pillar shader:", gl.getProgramInfoLog(program));
        return null;
      }
      gl.useProgram(program);
      const position = gl.getAttribLocation(program, "aPosition");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      const u = {};
      for (const name of UNIFORMS) u[name] = gl.getUniformLocation(program, name);
      gl.uniform3fv(u.uTopColor, rgb(props.topColor));
      gl.uniform3fv(u.uBottomColor, rgb(props.bottomColor));
      gl.uniform1f(u.uIntensity, props.intensity);
      gl.uniform1f(u.uGlowAmount, props.glowAmount);
      gl.uniform1f(u.uPillarWidth, props.pillarWidth);
      gl.uniform1f(u.uPillarHeight, props.pillarHeight);
      gl.uniform1f(u.uNoiseIntensity, props.noiseIntensity);
      gl.uniform2fv(u.uPillarRot, rotation((props.pillarRotation * Math.PI) / 180));
      gl.uniform2fv(u.uWave, rotation(0.4));
      uniforms = u;
      size();
      return u;
    };

    const observer = new ResizeObserver(size);
    observer.observe(host);

    // Expand the top (blue) field in dark mode and the bottom (orange) in
    // light, following the restored preference and every later change.
    let target = 0;
    const balanceFor = () =>
      props.followTheme ? (document.documentElement.dataset.theme === "light" ? -0.22 : 0.22) : 0;
    target = balanceFor();
    const theme = new MutationObserver(() => {
      target = balanceFor();
    });
    if (props.followTheme) {
      theme.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const frameTime = 1000 / settings.fps;
    let raf = 0;
    let time = 0;
    let balance = target;
    let lastTime = performance.now();
    let painted = false;
    let lost = false;

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (lost || !program) return;
      let u = uniforms;
      if (!u) {
        if (parallel && !gl.getProgramParameter(program, parallel.COMPLETION_STATUS_KHR)) return;
        u = link();
        if (!u) {
          cancelAnimationFrame(raf);
          return;
        }
        lastTime = now;
      }

      const delta = now - lastTime;
      if (delta < frameTime) return;
      lastTime = now - (delta % frameTime);

      time += 0.016 * props.rotationSpeed;
      balance = reducedMotion.matches
        ? target
        : balance + (target - balance) * (1 - Math.exp((-5 * delta) / 1000));
      gl.uniform1f(u.uTime, time);
      gl.uniform2fv(u.uRot, rotation(time * 0.3));
      gl.uniform1f(u.uColorBalance, balance);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      if (!painted) {
        painted = true;
        // The stylesheet cross-fades the host in and the stand-in out on this.
        host.dataset.ready = "";
      }
    };

    const onLost = (event) => {
      event.preventDefault();
      lost = true;
    };
    const onRestored = () => {
      lost = false;
      build();
    };
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);

    build();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      theme.disconnect();
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      if (program) gl.deleteProgram(program);
      const lose = gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
      canvas.remove();
      delete host.dataset.ready;
    };
  };

  const start = (host) => {
    if (running.has(host)) return;
    const profile = tier();
    if (profile === "none") return;
    const props = Object.assign({}, DEFAULTS, JSON.parse(host.dataset.pillar || "{}"));
    const settings = QUALITY[props.quality || (profile === "light" ? "low" : "medium")];

    // Not before the first frame is on screen: taking a context and linking
    // a program ahead of it would hold the first paint back, and the still
    // field is there precisely so nothing has to wait for the shader.
    let teardown = null;
    let task = 0;
    const paint = requestAnimationFrame(() => {
      task = setTimeout(() => {
        teardown = boot(host, props, settings);
      }, 0);
    });
    running.set(host, () => {
      cancelAnimationFrame(paint);
      clearTimeout(task);
      if (teardown) teardown();
    });
  };

  const stop = (host) => {
    const teardown = running.get(host);
    if (!teardown) return;
    running.delete(host);
    teardown();
  };

  window.__pillar = { start, stop };

  // The first page load: the host is already in the HTML, or about to be.
  const scan = () => document.querySelectorAll(".pillar-host").forEach(start);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan, { once: true });
  } else {
    scan();
  }
})();
