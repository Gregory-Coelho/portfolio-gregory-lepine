"use client";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import {
  CSSSKILLS,
  CYPRESS,
  GITHUB,
  JEST,
  REACT,
  TAILWIND,
  TYPESCRIPT,
} from "../lib/constants";

const skills = [
  {
    icon: <img src="/assets/skills/react.png" />,
    key: "React",
    href: { REACT },
    label: "React",
  },
  {
    icon: <img src="/assets/skills/typescript.png" />,
    key: "TypeScript",
    href: { TYPESCRIPT },
    label: "TypeScript",
  },
  {
    icon: <img src="/assets/skills/tailwind-css.png" />,
    key: "Tailwind",
    href: { TAILWIND },
    label: "Tailwind",
  },
  {
    icon: <img src="/assets/skills/jest.png" />,
    key: "Jest",
    href: { JEST },
    label: "Jest",
  },
  {
    icon: <img src="/assets/skills/letter-c.png" />,
    key: "Cypress",
    href: { CYPRESS },
    label: "Cypress",
  },
  {
    icon: <img src="/assets/skills/github.png" />,
    key: "Github",
    href: { GITHUB },
    label: "Github",
  },
  {
    icon: <img src="/assets/skills/css.png" />,
    key: "CSS",
    href: { CSSSKILLS },
    label: "CSS",
  },
];

export default function SkillsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="flex flex-col justify-between mt-16 ">
          <h2 className="text-3xl m-4 font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-4 sm:mt-0 sm:grid-cols-3 lg:gap-16 ">
            {skills.map((s) => (
              <Card key={s.key}>
                <Link
                  href={s.href}
                  className="flex p-2 items-center content-between gap-4"
                >
                  <span className="bg-white relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500  group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <h3 className="text-white"> {s.label}</h3>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
