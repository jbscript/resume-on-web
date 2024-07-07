import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

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
                src="/profile.png"
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
            <ul className="flex justify-center items-center gap-2 lg:gap-4 lg:justify-start flex-wrap max-lg:p-6">
              <li>
                <a
                  className="btn btn-square btn-ghost group"
                  href="https://twitter.com/marc_louvion"
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
                  href="https://www.youtube.com/channel/UC12JO2IPlEViR-o6SLXKx1A"
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
                  href="https://www.linkedin.com/in/marclouvion"
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
          </div>
        </section>
        <section className="lg:h-screen lg:overflow-scroll noscrollbar w-full max-w-[1500px] ">
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
                          ${/* */}70.5k{/* */}/mo
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
        </section>
        <section className="lg:hidden">
          <div className="divider px-6 my-0 lg:hidden" />
          <ul className="flex justify-center items-center gap-2 lg:gap-4 lg:justify-start flex-wrap max-lg:p-6">
            <li>
              <a
                className="btn btn-square btn-ghost group"
                href="https://twitter.com/marc_louvion"
                target="_blank"
                aria-label="Open link to Twitter"
              >
                <span className="transform duration-200 group-hover:scale-110 fill-base-content">
                  <svg
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="currenColor"
                  >
                    <title data-testid="svgTitle" id="title_0.7989023227237741">
                      twitter
                    </title>
                    <path d="M8.1,21.034A12.717,12.717,0,0,1,1.23,19.019a.5.5,0,0,1,.329-.917,8.273,8.273,0,0,0,4.992-1,4.807,4.807,0,0,1-3.173-3.13.5.5,0,0,1,.348-.636A4.821,4.821,0,0,1,1.843,9.523a.548.548,0,0,1,.247-.458.506.506,0,0,1,.5-.034l.091.049A4.816,4.816,0,0,1,2.529,4a.507.507,0,0,1,.393-.247.5.5,0,0,1,.427.183,11.781,11.781,0,0,0,7.9,4.27c-.013-.144-.02-.289-.02-.435a4.81,4.81,0,0,1,8.116-3.493,8.157,8.157,0,0,0,2.32-.93.5.5,0,0,1,.73.583,4.781,4.781,0,0,1-.662,1.32c.191-.067.378-.143.563-.225a.5.5,0,0,1,.585.135.5.5,0,0,1,.034.6,9.2,9.2,0,0,1-2.057,2.2c0,.1,0,.208,0,.313A12.636,12.636,0,0,1,8.1,21.034ZM3.527,19.105a11.72,11.72,0,0,0,4.577.929A11.645,11.645,0,0,0,19.863,8.275c0-.179,0-.357-.012-.533a.5.5,0,0,1,.207-.43,8.181,8.181,0,0,0,.959-.81,9.068,9.068,0,0,1-.932.16.5.5,0,0,1-.316-.925,3.857,3.857,0,0,0,.977-.837,9.013,9.013,0,0,1-1.465.418.5.5,0,0,1-.461-.148,3.812,3.812,0,0,0-6.491,3.473.5.5,0,0,1-.1.434.489.489,0,0,1-.409.179A12.772,12.772,0,0,1,3.09,5.167,3.812,3.812,0,0,0,4.573,9.591a.5.5,0,0,1,.2.569.523.523,0,0,1-.491.347,4.772,4.772,0,0,1-1.36-.242A3.813,3.813,0,0,0,5.9,13.257a.5.5,0,0,1,.033.972,6.63,6.63,0,0,1-1.279.17,3.809,3.809,0,0,0,3.236,1.914.5.5,0,0,1,.3.894A9.081,9.081,0,0,1,3.527,19.105Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                className="btn btn-square btn-ghost group"
                href="https://www.youtube.com/channel/UC12JO2IPlEViR-o6SLXKx1A"
                target="_blank"
                aria-label="Open link to YouTube"
              >
                <span className="transform duration-200 group-hover:scale-110 fill-base-content">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="currenColor"
                  >
                    <path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                className="btn btn-square btn-ghost group"
                href="https://www.linkedin.com/in/marclouvion"
                target="_blank"
                aria-label="Open link to LinkedIn"
              >
                <span className="transform duration-200 group-hover:scale-110 fill-base-content">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="currenColor"
                  >
                    <path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z" />
                    <path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z" />
                    <path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z" />
                  </svg>
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
                  <svg
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z" />
                    <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z" />
                    <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
