import { type NextPage } from "next";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>willthedev</title>
        <meta name="description" content="WillTheDev's official website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                👋 Hi, I'm Will.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Nice to meet you, I'm a self-taught programmer in the fields of
                Javascript, Typescript, and C#. I'm constantly learning new
                innovations and coding practices, while constantly being open to
                paid comissions.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <a
                  href="https://github.com/wtbudgie"
                  className="inline-flex items-center rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white transition hover:border-blue-500 hover:bg-blue-400"
                >
                  GitHub 
                  <FaGithub />
                </a>
                <a
                  href="https://willthedev.com/discord"
                  className="inline-flex items-center rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white transition hover:border-blue-500 hover:bg-blue-400"
                >
                  Discord 
                  <FaDiscord fontSize={"20px"} />
                </a>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="ml-20">
            <h2 className="ml-20 text-6xl font-bold tracking-tight text-white">
              Projects
            </h2>
          </div>
          <br />
          <div
            className="grid grid-cols-2 gap-10"
            style={{ paddingLeft: "250px", paddingRight: "250px" }}
          >
            <div className="flex justify-center">
              <div
                className="max-w-md overflow-hidden rounded shadow-lg"
                style={{ backgroundColor: "#1f2c47" }}
              >
                <div className="px-6 py-4">
                  <div
                    className="mb-2 text-xl font-bold"
                    style={{ color: "white" }}
                  >
                    Resolv Bot
                  </div>
                  <p className="text-base text-gray-400">
                    Resolv is the world's first staff management Discord bot.
                    Strikes, Breaks, Disciplinaries, Activity management and
                    more!
                  </p>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #javascript
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #discordjs
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #nextjs
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="max-w-md overflow-hidden rounded shadow-lg"
                style={{ backgroundColor: "#1f2c47" }}
              >
                <div className="px-6 py-4">
                  <div
                    className="mb-2 text-xl font-bold"
                    style={{ color: "white" }}
                  >
                    BudgieBot
                  </div>
                  <p className="text-base text-gray-400">
                    A MultiPurpose discord bot that can fullfill all of your
                    server's needs. With User Management, Moderation, and
                    Utility features.
                  </p>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #javascript
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #discordjs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
