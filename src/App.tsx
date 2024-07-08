import {
  GithubLogo,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ProjectCard } from "./project-card";
import { WorkExperience } from "./work-experience";
import { Education } from "./education";
import Profilepic from "./assets/profile.png";

function App() {
  return (
    <main className="min-h-screen bg-slate-200">
      <div className="min-h-screen flex flex-col lg:flex-row max-lg:pb-16 max-w-[1800px] mx-auto ">
        <section className="shrink-0 space-y-4 lg:space-y-8 lg:w-[350px] xl:w-[500px] p-6 lg:p-16 lg:pr-0 xl:pr-16 ">
          <div className="flex gap-4 lg:gap-8 lg:flex-col justify-start items-start">
            <span className="relative shrink-0">
              <img
                alt="jabir profile picture"
                width={176}
                height={176}
                decoding="async"
                data-nimg={1}
                className="w-20 h-20 lg:w-56 lg:h-56 rounded-full object-cover"
                style={{ color: "transparent" }}
                src={Profilepic}
              />
              <div className="absolute inset-0 rounded-full shadow-[0_0_0px_1px_rgba(0,0,0,0.06)]" />
            </span>
            <div className="flex-1 space-y-6">
              <div>
                <h1 className="font-bold lg:font-extrabold text-xl lg:text-4xl mb-1">
                  Jabir Jaleel
                </h1>
                <p className="text-muted-foreground">
                  Coding my way through life, one commit at a time.
                </p>
              </div>

              <div>
                Hello! I'm Jabir Jaleel, a passionate software developer
                specializing in full-stack development. I love creating
                intuitive and efficient web applications.
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Tailwind</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">Chrome Extension</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
              <Button>Download Resume</Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="divider px-6 my-0 lg:hidden" />
            <SocialPlatform />
          </div>
        </section>

        <Tabs defaultValue="projects" className="p-6 lg:p-16  w-full">
          <TabsList className="grid grid-cols-3 max-w-[400px]">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="password">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="mt-6">
            <ul className="max-lg:space-y-4 lg:grid lg:grid-cols-2 lg:gap-8">
              {[
                "https://cdn.llm.report/openai-demo.mp4",
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
              ].map((i, key) => (
                <ProjectCard
                  key={key}
                  dates="April 2023 - September 2023"
                  link="https://shipfa.st?ref=indiepage"
                  video={i}
                  tags={["React", "Tailwind", "TypeScript"]}
                  title="ShipFast"
                  description="Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models."
                  links={[
                    {
                      icon: <Globe size={16} />,
                      type: "website",
                      href: "dD",
                    },
                  ]}
                />
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="password">
            <WorkExperience />
          </TabsContent>
          <TabsContent value="education">
            <Education />
          </TabsContent>
        </Tabs>

        {/* <section className="lg:h-screen lg:overflow-scroll noscrollbar w-full max-w-[1500px] ">
     
          <div className="divider px-6 my-0 lg:hidden " />

          <ul className="max-lg:space-y-4 p-6 lg:p-16 lg:grid lg:grid-cols-2 lg:gap-8">
            {Array.from({ length: 20 }, (_, i) => (
              <li className="card bg-white duration-200 h-min col-span-1">
                <a
                  className="cursor-pointer rounded-box duration-200 p-4 lg:p-6 group hover:bg-base-300 hover:scale-[1.02] space-y-0.5 lg:space-y-1"
                  href="https://shipfa.st?ref=indiepage"
                  target="_blank"
                >
                  <div className="flex items-center gap-y-1 gap-x-2 lg:gap-x-3 flex-wrap">
                    <img
                      alt="ShipFast Logo"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className="w-5 h-5 lg:w-6 lg:h-6  duration-200 drop-shadow-sm object-cover group-hover:-rotate-12 delay-100 w-4 h-4 lg:w-5 lg:h-5"
                      style={{ color: "transparent" }}
                      src="https://marclou.com/_next/image?url=https%3A%2F%2Fd3m8mk7e1mf7xn.cloudfront.net%2F64224402d24ae443b84e744a%2F1693262630584logo_transparent.png&w=48&q=75"
                    />
                    <p className=" mr-auto  lg:text-base font-semibold">
                      ShipFast
                    </p>
                    <div className="flex gap-2">
                      <span
                        className="badge badge-ghost badge-sm whitespace-nowrap duration-200 relative relative "
                        data-tip="Last 30 days of revenue. Data is verified by Stripe and doesn't include payments that ShipFast may have collected via other means. Updated daily."
                        currentitem="false"
                      >
                        <svg
                          viewBox="0 0 29 29"
                          className="w-4 h-4 absolute -left-2.5 top-1/2 -translate-y-1/2 rounded-l-rounded-badge "
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_118_3)">
                            <path
                              d="M28.8698 0H-0.000286818L-0.000201464 6.48V22.39C-0.000201464 25.9688 0.000243902 28.87 0.000243902 28.87H28.8698V22.39V6.48V0Z"
                              fill="#6772E5"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.2999 11.2001C13.2999 10.5101 13.8699 10.2001 14.7899 10.2001C16.3144 10.2331 17.8104 10.6199 19.1599 11.3301V7.24013C17.7715 6.69567 16.2911 6.42405 14.7999 6.44013C11.2399 6.44013 8.85986 8.30013 8.85986 11.4401C8.85986 16.3001 15.5399 15.5101 15.5399 17.6101C15.5399 18.4201 14.8299 18.6801 13.8599 18.6801C12.151 18.5859 10.4874 18.0964 8.99986 17.2501V21.4401C10.5156 22.0951 12.1486 22.4353 13.7999 22.4401C17.4499 22.4401 19.9699 20.6401 19.9699 17.4401C19.9999 12.2301 13.2999 13.1701 13.2999 11.2001Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_118_3">
                              <rect width="28.87" height="28.87" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="opacity-0">.</span>
                        <span>
                       ss
                        </span>
                      </span>
                    </div>
                  </div>
                  <p className="text-base-content/80 text-xs lg:text-sm">
                    Ship your startup in days, not months
                  </p>
                </a>
                <div className="w-full lg:p-2 h-24 lg:h-28">d</div>
              </li>
            ))}
          </ul>
        </section> */}
        <section className="lg:hidden">
          <div className="divider px-6 my-0 lg:hidden" />
          <SocialPlatform />
        </section>
      </div>
    </main>
  );
}

export default App;

function SocialPlatform() {
  return (
    <ul className="flex justify-center items-center gap-2 lg:gap-4 lg:justify-start flex-wrap max-lg:p-6">
      <li>
        <a
          className="btn btn-square btn-ghost group"
          href="https://x.com/jbscript99"
          target="_blank"
          aria-label="Open link to Twitter"
        >
          <span className="transform duration-200 group-hover:scale-110 fill-base-content">
            <XLogo size={22} />
          </span>
        </a>
      </li>
      <li>
        <a
          className="btn btn-square btn-ghost group"
          href="https://www.linkedin.com/in/jbscript"
          target="_blank"
          aria-label="Open link to YouTube"
        >
          <span className="transform duration-200 group-hover:scale-110 fill-base-content">
            <LinkedinLogo size={22} />
          </span>
        </a>
      </li>
      <li>
        <a
          className="btn btn-square btn-ghost group"
          href="https://www.linkedin.com/in/jbscript"
          target="_blank"
          aria-label="Open link to LinkedIn"
        >
          <span className="transform duration-200 group-hover:scale-110 fill-base-content">
            <GithubLogo size={22} />
          </span>
        </a>
      </li>
      <li>
        <a
          className="btn btn-square btn-ghost group"
          href="https://www.instagram.com/marclouvion/"
          target="_blank"
          aria-label="Open link to Instagram"
        >
          <span className="transform duration-200 group-hover:scale-110 fill-base-content">
            <InstagramLogo size={22} />
          </span>
        </a>
      </li>
    </ul>
  );
}
