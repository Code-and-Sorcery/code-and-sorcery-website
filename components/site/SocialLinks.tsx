import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/components/Icons";
import { SOCIALS } from "@/content/i18n";
import { cn } from "@/lib/utils";

const links = [
  { key: "github", href: SOCIALS.github, label: "GitHub", Icon: GitHubIcon },
  {
    key: "linkedin",
    href: SOCIALS.linkedin,
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  { key: "resume", href: SOCIALS.resume, label: "Résumé", Icon: ResumeIcon },
] as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ key, href, label, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            title={label}
            aria-label={label}
            className="inline-flex items-center justify-center rounded-full border border-line bg-white/[0.03] p-2.5 text-fg-dim backdrop-blur-sm transition-colors hover:border-line-strong hover:text-fg"
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
