import * as React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center space-y-6 from-rose-500 to-yellow-500">
      <div className="animate__animated animate__fadeInDown p-2 transition text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-yellow-500 font-sans font-extrabold text-8xl sm:text-9xl tracking-tight whitespace-nowrap subpixel-antialiased">
        Zimo Li
      </div>
      <a
        href="https://github.com/lzm0"
        className="animate__animated animate__fadeInUp"
      >
        <div className="flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-slate-500/25 bg-gradient-to-b from-slate-600 to-slate-700 border-b-4 border-slate-800 hover:scale-105">
          <StaticImage
            src="../images/github.png"
            placeholder="none"
            className="ml-5 w-8 h-8"
            alt="GitHub Icon"
          ></StaticImage>
          <div className="font-sans font-semibold text-2xl text-white align-middle mx-auto">
            GitHub
          </div>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/zimo-li-728bab15b/"
        className="animate__animated animate__fadeInUp"
      >
        <div className="flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-blue-500/25 bg-gradient-to-b from-blue-500 to-blue-600 border-b-4 border-blue-700 hover:scale-105">
          <StaticImage
            src="../images/linkedin.png"
            placeholder="none"
            className="ml-5 w-8 h-8"
            alt="LinkedIn Icon"
          ></StaticImage>
          <div className="font-sans font-semibold text-2xl text-white align-middle mx-auto">
            LinkedIn
          </div>
        </div>
      </a>
      <a
        href="https://blog.zimo.li/"
        className="animate__animated animate__fadeInUp"
      >
        <div className="flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-indigo-500/25 bg-gradient-to-b from-indigo-500 to-indigo-600 border-b-4 border-indigo-700 hover:scale-105">
          <StaticImage
            src="../images/hashnode.png"
            placeholder="none"
            className="ml-5 w-8 h-8"
            alt="Hashnode Icon"
          ></StaticImage>
          <div className="font-sans font-semibold text-2xl text-white align-middle mx-auto">
            Blog
          </div>
        </div>
      </a>
      <a
        href="https://cronify.zimo.li/"
        className="animate__animated animate__fadeInUp"
      >
        <div className="flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-pink-500/25 bg-gradient-to-b from-pink-500 to-red-500 border-b-4 border-pink-600 hover:scale-105">
          <StaticImage
            src="../images/cronify.png"
            placeholder="none"
            className="ml-5 w-8 h-8"
            alt="Cronify Icon"
          ></StaticImage>
          <div className="font-sans font-semibold text-2xl text-white align-middle mx-auto">
            Cronify
          </div>
        </div>
      </a>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Zimo Li</title>;
