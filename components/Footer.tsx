import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-3">
          <Link
            href="/"
            className="font-bold text-xl flex"
          >
            <Image
              src="/images/code-and-sorcery-logo.webp"
              alt="Code and Sorcery Logo"
              width={28}
              height={28}
              className="object-contain rounded-lg mr-2"
            />
            Code and Sorcery
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/Code-and-Sorcery"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://play.google.com/store/apps/dev?id=4852345875685115545"
              className="opacity-60 hover:opacity-100"
            >
              Google Play
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

        </div>
      </section>

      <section className="container pb-5 text-center text-gray-500">
        &quot;Did you put your name into the Goblet of Fire, Harry?&quot;, Dumbledore asked calmly.
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024,{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/williamsimonvezo/"
            className="text-primary border-primary hover:border-b-2"
          >
            Code and Sorcery
          </a>
        </h3>
      </section>
    </footer>
  );
};
