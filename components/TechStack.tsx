import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface TechStackProps {
  icon: string;
  title: string;
}

const techStacks: TechStackProps[] = [
  {
    icon: "/svg/eslint.svg",
    title: "EsLint",
  },
  {
    icon: "/svg/git.svg",
    title: "Git",
  },
  {
    icon: "/svg/github.svg",
    title: "Github",
  },
  {
    icon: "/svg/graphql.svg",
    title: "GraphQL",
  },
  {
    icon: "/svg/mongodb.svg",
    title: "MongoDB",
  },
  {
    icon: "/svg/nextjs.svg",
    title: "NextJS",
  },
  {
    icon: "/svg/nodejs.svg",
    title: "NodeJS",
  },
  {
    icon: "/svg/npm.svg",
    title: "NPM",
  },
  {
    icon: "/svg/playwright.svg",
    title: "Playwright",
  },
  {
    icon: "/svg/postgresql.svg",
    title: "PostgreSQL",
  },
  {
    icon: "/svg/python.svg",
    title: "Python",
  },
  {
    icon: "/svg/radixui.svg",
    title: "RadixUI",
  },
  {
    icon: "/svg/reactjs.svg",
    title: "ReactJS",
  },
  {
    icon: "/svg/shadcn.svg",
    title: "shadcn-ui",
  },
  {
    icon: "/svg/solidity.svg",
    title: "Solidity",
  },
  {
    icon: "/svg/storybook.svg",
    title: "Storybook",
  },
  {
    icon: "/svg/supabase.svg",
    title: "Supabase",
  },
  {
    icon: "/svg/tailwindcss.svg",
    title: "TailwindCSS",
  },
  {
    icon: "/svg/typescript.svg",
    title: "Typescript",
  },
  {
    icon: "/svg/vitest.svg",
    title: "Vitest",
  },
  {
    icon: "/svg/vscode.svg",
    title: "VSCode",
  },
  {
    icon: "/svg/zod.svg",
    title: "Zod",
  },
  {
    icon: "",
    title: "And more...",
  },
];

export const TechStack = () => {
  return (
    <section
      id="techstack"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Main{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Tech Stack{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStacks.map(({ icon, title }: TechStackProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader className="h-full">
              <CardTitle className="grid gap-4 place-items-center h-full">
                {icon !== "" && (
                  <Image src={icon} alt={title} width={60} height={60} />
                )}
                {title}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
