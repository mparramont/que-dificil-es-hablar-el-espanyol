import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "~/components/Svgs";
import React from "react";
import { LanguageHeader } from "~/components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import { courseList } from "~/courses/registry";
import { useBoundStore } from "~/hooks/useBoundStore";
import type { CourseId } from "~/courses/types";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  const activeCourseId = useBoundStore((s) => s.activeCourseId);
  const setActiveCourseId = useBoundStore((s) => s.setActiveCourseId);

  const onPick = (id: CourseId) => () => setActiveCourseId(id);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <LanguageHeader />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <GlobeSvg className="h-fit w-7/12 md:w-[360px]" />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            ¡Qué difícil es hablar!
            <span className="block pt-2 text-base font-normal opacity-80">
              Custom courses with listen, write & speak exercises — pick a
              course to begin.
            </span>
          </p>

          <div className="mx-auto mt-4 flex max-w-md flex-col items-stretch gap-3">
            <div className="text-xs font-bold uppercase tracking-wide opacity-70">
              Choose a course
            </div>
            {courseList.map((c) => {
              const active = c.id === activeCourseId;
              return (
                <button
                  key={c.id}
                  onClick={onPick(c.id)}
                  className={[
                    "flex flex-col items-start rounded-2xl border-2 border-b-4 px-5 py-3 text-left transition",
                    active
                      ? "border-yellow-300 bg-yellow-400/20"
                      : "border-[#042c60] bg-[#1d4576] hover:bg-[#204b82]",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="text-lg font-bold">
                      {c.flagEmoji} {c.name}
                    </span>
                    <span className="text-xs uppercase opacity-70">
                      {c.placement.levels[0]} →{" "}
                      {c.placement.levels[c.placement.levels.length - 1]}
                    </span>
                  </div>
                  <span className="text-sm opacity-80">{c.nativeName}</span>
                  <span className="mt-1 text-xs opacity-70">
                    {c.description}
                  </span>
                </button>
              );
            })}

            <Link
              href="/placement"
              className="mt-2 w-full rounded-2xl border-b-4 border-green-700 bg-green-600 px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500"
            >
              Take placement test
            </Link>
            <Link
              href="/learn"
              className="w-full rounded-2xl border-2 border-b-4 border-[#042c60] bg-[#235390] px-8 py-3 text-center font-bold uppercase transition hover:bg-[#204b82]"
            >
              Skip — start at level 1
            </Link>
            <button
              className="text-sm uppercase opacity-80 hover:opacity-100"
              onClick={() => setLoginScreenState("LOGIN")}
            >
              I already have an account
            </button>
          </div>
        </div>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
