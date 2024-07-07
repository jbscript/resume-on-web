import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-between px-8">
          <nav className="relative mx-auto flex w-full items-center justify-between border-zinc-200 bg-primary-light bg-opacity-60 pt-5 pb-8 text-zinc-900  dark:bg-primary-dark dark:text-zinc-100 sm:pb-16">
            <a
              className="museo-sans-medium hidden cursor-pointer rounded-md border border-gray-200 px-2.5 text-2xl uppercase tracking-wide text-primary-dark transition-all duration-500 hover:border-gray-500 dark:border-gray-700 dark:font-normal dark:text-primary-light dark:hover:border-gray-500 sm:block"
              href="/"
            >
              S
            </a>
            <div className="ml-[-0.60rem]">
              <div className="rounded-md border border-gray-200 transition-all duration-500 hover:border-gray-500 focus:border-gray-500 dark:border-gray-700 dark:hover:border-gray-500 sm:border-0">
                <button
                  className="mobileSideNav_burger__YwgXL visible md:hidden"
                  aria-label="Toggle menu"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-5 w-5 text-neutral-900 dark:text-neutral-100"
                    fill="currentColor"
                    data-hide="false"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-5 w-5 text-neutral-900 dark:text-neutral-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-hide="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="menuComingSoonModal absolute" />
              <div className="flex items-end justify-center text-lg sm:gap-8">
                <a href="/about">
                  <span className="text-zinc-900 dark:text-zinc-100 museo-sans-regular bg-growing-underline text-md hidden bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 tracking-normal text-zinc-400 transition-all hover:cursor-pointer hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-300 hover:text-zinc-700 focus:from-zinc-100 focus:via-zinc-200 focus:to-zinc-300 active:from-zinc-100 active:via-zinc-200 active:to-zinc-300 active:focus:via-zinc-700 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-600 dark:text-zinc-200 dark:hover:from-zinc-900 dark:hover:via-zinc-700 dark:hover:to-zinc-600 dark:hover:text-zinc-200 dark:focus:from-zinc-900 dark:focus:via-zinc-700 dark:focus:to-zinc-600 dark:active:from-zinc-900 dark:active:to-zinc-600  md:inline-block ">
                    About
                  </span>
                </a>
                <a href="/articles">
                  <span className="text-zinc-400 dark:text-zinc-500 museo-sans-regular bg-growing-underline text-md hidden bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 tracking-normal text-zinc-400 transition-all hover:cursor-pointer hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-300 hover:text-zinc-700 focus:from-zinc-100 focus:via-zinc-200 focus:to-zinc-300 active:from-zinc-100 active:via-zinc-200 active:to-zinc-300 active:focus:via-zinc-700 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-600 dark:text-zinc-200 dark:hover:from-zinc-900 dark:hover:via-zinc-700 dark:hover:to-zinc-600 dark:hover:text-zinc-200 dark:focus:from-zinc-900 dark:focus:via-zinc-700 dark:focus:to-zinc-600 dark:active:from-zinc-900 dark:active:to-zinc-600  md:inline-block ">
                    Articles
                  </span>
                </a>
                <a href="/projects">
                  <span className="text-zinc-400 dark:text-zinc-500 museo-sans-regular bg-growing-underline text-md hidden bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 tracking-normal text-zinc-400 transition-all hover:cursor-pointer hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-300 hover:text-zinc-700 focus:from-zinc-100 focus:via-zinc-200 focus:to-zinc-300 active:from-zinc-100 active:via-zinc-200 active:to-zinc-300 active:focus:via-zinc-700 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-600 dark:text-zinc-200 dark:hover:from-zinc-900 dark:hover:via-zinc-700 dark:hover:to-zinc-600 dark:hover:text-zinc-200 dark:focus:from-zinc-900 dark:focus:via-zinc-700 dark:focus:to-zinc-600 dark:active:from-zinc-900 dark:active:to-zinc-600  md:inline-block ">
                    Projects
                  </span>
                </a>
                <a href="/uses">
                  <span className="text-zinc-400 dark:text-zinc-500 museo-sans-regular bg-growing-underline text-md hidden bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 tracking-normal text-zinc-400 transition-all hover:cursor-pointer hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-300 hover:text-zinc-700 focus:from-zinc-100 focus:via-zinc-200 focus:to-zinc-300 active:from-zinc-100 active:via-zinc-200 active:to-zinc-300 active:focus:via-zinc-700 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-600 dark:text-zinc-200 dark:hover:from-zinc-900 dark:hover:via-zinc-700 dark:hover:to-zinc-600 dark:hover:text-zinc-200 dark:focus:from-zinc-900 dark:focus:via-zinc-700 dark:focus:to-zinc-600 dark:active:from-zinc-900 dark:active:to-zinc-600  md:inline-block ">
                    Uses
                  </span>
                </a>
                <a href="/stats">
                  <span className="text-zinc-400 dark:text-zinc-500 museo-sans-regular bg-growing-underline text-md hidden bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 tracking-normal text-zinc-400 transition-all hover:cursor-pointer hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-300 hover:text-zinc-700 focus:from-zinc-100 focus:via-zinc-200 focus:to-zinc-300 active:from-zinc-100 active:via-zinc-200 active:to-zinc-300 active:focus:via-zinc-700 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-600 dark:text-zinc-200 dark:hover:from-zinc-900 dark:hover:via-zinc-700 dark:hover:to-zinc-600 dark:hover:text-zinc-200 dark:focus:from-zinc-900 dark:focus:via-zinc-700 dark:focus:to-zinc-600 dark:active:from-zinc-900 dark:active:to-zinc-600  md:inline-block ">
                    Stats
                  </span>
                </a>
              </div>
            </div>
            <a
              className="general-sans-medium block cursor-pointer text-2xl uppercase tracking-wide text-secondary-dark dark:text-secondary-light sm:hidden "
              href="/"
            >
              Stoman
            </a>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="flex h-9 w-9 items-center justify-center transition-all"
            >
              <div className="rounded-md border border-gray-300 p-2 transition-all duration-500 ease-in-out hover:border-gray-500 dark:border-gray-700 dark:hover:border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-4 w-4 transform   text-zinc-700  dark:text-zinc-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
            </button>
          </nav>
          <main>
            <div className="pt-4" style={{ opacity: 1 }}>
              <div className="mb-8 space-y-5">
                <div className="w-full justify-between sm:flex sm:space-x-5">
                  <div className="profile-image w-full items-baseline sm:w-2/6">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27256%27%20height=%27250%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                        />
                      </span>
                      <img
                        alt="Stoman Profile"
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.7241725e.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.7241725e.png&w=640&q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.7241725e.png&w=640&q=75"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="rounded-md shadow-xl  dark:shadow-slate-900"
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                  </div>
                  <div className="mt-4 w-full sm:mt-0 sm:w-5/6">
                    <div>
                      <p className=" museo-sans-regular text-md mb-3 leading-7 text-zinc-600 dark:text-zinc-300 ">
                        Hi, I'm{" "}
                        <a
                          className=" museo-sans-medium text-primary-dark dark:text-primary-light "
                          href="https://twitter.com/realstoman"
                        >
                          Nangialai Stoman
                        </a>
                        , a{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          full-stack{" "}
                        </span>
                        developer and{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          design{" "}
                        </span>
                        enthusiast. I have been working as a web and software
                        developer for the past 6 years.
                      </p>
                      <p className=" museo-sans-regular text-md mb-3 leading-7 text-zinc-600 dark:text-zinc-300 ">
                        I feel comfortable working with technologies like{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          JavaScript
                        </span>
                        ,{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          React
                        </span>
                        ,{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          Node.js
                        </span>
                        ,{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          TypeScript
                        </span>
                        ,{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          Laravel
                        </span>
                        ,{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          WordPress
                        </span>
                        , and many other technologies in the web ecosystem.
                      </p>
                      <p className=" museo-sans-regular text-md mb-3 leading-7 text-zinc-600 dark:text-zinc-300 ">
                        I love programming, design, user interfaces, and
                        open-source, and that's what I'm passionate about. Aside
                        from work, I'm a big fan of football and tennis.
                      </p>
                      <p className="museo-sans-regular text-md leading-7 text-zinc-600 dark:text-zinc-300">
                        Currently, I'm working on a few{" "}
                        <span className=" museo-sans-medium text-primary-dark dark:text-primary-light ">
                          tools for developers{" "}
                        </span>
                        to be launched soon. In addition, I'm learning{" "}
                        <span className="museo-sans-medium text-primary-dark dark:text-primary-light">
                          AI{" "}
                        </span>{" "}
                        for automation and{" "}
                        <span className="museo-sans-medium text-primary-dark dark:text-primary-light">
                          flutter{" "}
                        </span>
                        to make cross-platform apps.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="block w-full justify-between sm:flex sm:space-x-4">
                  <div className="w-full items-baseline space-y-3 sm:w-2/6 md:flex md:justify-start">
                    <h1 className="general-sans-medium rounded-sm border-l-2 border-zinc-100 pl-3  text-2xl text-zinc-700 dark:border-zinc-800/80 dark:text-zinc-100 sm:text-3xl ">
                      Work &amp; Career
                    </h1>
                  </div>
                  <div className="relative mt-5 w-full space-y-3 border-l border-zinc-200/50 dark:border-zinc-800/50 sm:mt-0 sm:w-5/6">
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Full-stack Developer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://gulzadgroup.com"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          Gulzad Group
                        </a>{" "}
                        · Contract
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Apr 2023 - Present
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Dubai, UAE · Remote
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Software Engineer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://rta.af"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          RTA
                        </a>{" "}
                        · Full-time
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        May 2020 - Present
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Kabul, Afghanistan · On-site
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Chief Technology Officer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://getsinbad.com"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          Sinbad
                        </a>{" "}
                        · Part-time
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Jul 2022 - Dec 2022
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Toronto, Canada · Remote
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Consultant Web Developer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://mobygroup.com"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          Moby Group
                        </a>{" "}
                        · Contract
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Oct 2019 - Sep 2021
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Kabul, Afghanistan · Hybrid
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Front-end Engineer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://rapiditeration.com"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          RapidIteration
                        </a>{" "}
                        · Full-time
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Oct 2019 - May 2020
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        British Columbia, Canada · Remote
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Head of Development
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://pts.af"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          PTS
                        </a>{" "}
                        · Part-time
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Jun 2019 - Jan 2020
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Kabul, Afghanistan · Hybrid
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Web Developer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://dnaconsultants.af"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          DNA Consultants
                        </a>{" "}
                        · Full-time
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        May 2018 - Jun 2019
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Kabul, Afghanistan · On-site
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Software Developer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://aop.gov.af/en"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          Office of The President
                        </a>{" "}
                        · Full-time
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Feb 2018 - May 2018
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Kabul, Afghanistan · On-site
                      </p>
                    </div>
                    <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50" />
                      <h1 className="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                        Web Developer
                      </h1>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        <a
                          href="https://gulistanbulinsaat.com"
                          className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light"
                          target="_blank"
                        >
                          Gul Istanbul
                        </a>{" "}
                        · Full-time
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Feb 2017 - Dec 2017
                      </p>
                      <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                        Kabul, Istanbul · On-site
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full items-center pt-1 sm:flex sm:justify-between sm:space-x-5">
                  <div className="w-full space-y-3 sm:ml-0 sm:pl-64">
                    <a
                      download="CV-Nangialai-Stoman.pdf"
                      href="/CV-Nangialai-Stoman.pdf"
                      target="_blank"
                      className="align-center museo-sans-regular text-md flex items-center justify-center space-x-3 rounded-md bg-gray-800 py-4 px-3 tracking-wide text-gray-100 outline-offset-2 transition hover:bg-gray-700 active:bg-gray-800 active:text-gray-100/70 active:transition-none dark:bg-gray-800 dark:hover:bg-gray-700/70 dark:active:bg-gray-700/70 dark:active:text-gray-100/90"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-2xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1={12} y1={15} x2={12} y2={3} />
                      </svg>
                      <span>Download CV</span>
                    </a>
                  </div>
                  <div className="mt-5 sm:mt-2 w-full flex-col items-end space-y-3 pl-1 sm:flex sm:w-4/6 sm:justify-end sm:pl-0">
                    <div>
                      <a
                        download="Stoman-Profile-Image1.png"
                        href="/images/profile.png"
                        target="_blank"
                        className="museo-sans-regular text-lg text-gray-600 underline decoration-gray-500 decoration-1 underline-offset-[5px] hover:text-primary-dark dark:text-gray-300 dark:decoration-gray-300 dark:hover:text-white"
                      >
                        Download profile photo 1
                      </a>
                    </div>
                    <div>
                      <a
                        download="Stoman-Profile-Image2.png"
                        href="/images/banner-profile.jpg"
                        target="_blank"
                        className="museo-sans-regular text-lg text-gray-600 underline decoration-gray-500 decoration-1 underline-offset-[5px] hover:text-primary-dark dark:text-gray-300 dark:decoration-gray-300 dark:hover:text-white"
                      >
                        Download profile photo 2
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="mt-10 flex flex-col items-center py-5 px-6 sm:mt-20">
            <div className="flex justify-center gap-7 md:justify-between md:gap-10">
              <a
                href="https://github.com/realstoman"
                className=" text-neutral-500 hover:text-neutral-700 dark:hover:text-secondary-light "
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 496 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/realstoman"
                className=" text-neutral-500 hover:text-neutral-700 dark:hover:text-secondary-light "
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/realstoman"
                className=" text-neutral-500 hover:text-neutral-700 dark:hover:text-secondary-light "
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@realstoman"
                className=" text-neutral-500 hover:text-neutral-700 dark:hover:text-secondary-light "
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 576 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
              <a
                href="https://www.behance.net/realstoman"
                className=" text-neutral-500 hover:text-neutral-700 dark:hover:text-secondary-light "
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 576 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                </svg>
              </a>
              <a
                href="https://unsplash.com/stoman"
                className=" text-neutral-500 hover:text-neutral-700 dark:hover:text-secondary-light "
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
