import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/Icons";

interface TechStackProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const techStacks: TechStackProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const TechStack = () => {
  return (
    <section
      id="techstack"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our Main{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Tech Stack{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStacks.map(({ icon, title, description }: TechStackProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
