"use client";
// components/IntroSection.tsx
import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRouter } from "nextjs-toploader/app";

export default function IntroSection() {
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    const skewSetter = gsap.quickTo("img", "skewY");
    const clamp = gsap.utils.clamp(-20, 20);

    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 2,
      speed: 3,
      effects: true,
      onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
      onStop: () => skewSetter(0),
    });
  }, []);

  return (
    <div
      id="intro"
      className="relative w-full min-h-screen text-white overflow-x-hidden"
    >
      <div className="fixed inset-0 bg-[#1a1721] bg-cover bg-center bg-no-repeat" />
      <div className="fixed inset-0 bg-[url('https://cdn.bityo.tw/bityo_wallpaper_19201080.png')] bg-cover bg-center bg-no-repeat opacity-40" />
      <div id="wrapper" className="inset-0 overflow-hidden">
        {/* Scrolly Images：完全獨立，不被 ScrollSmoother 控制 */}
        <h1 className="fixed top-1/2 w-full text-5xl sm:text-[8vw] text-center font-black -translate-y-1/2 z-[-2] text-white stroke-text stroke">
          加密貨幣 <br />
          投資計算機
        </h1>
        <button
          onClick={() => router.push("/Crypto/PositionCalculator")}
          type="button"
          className="border-[1px] rounded-xl border-white text-center text-xl p-2 px-4 fixed bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hover:text-white/80 hover:border-white/80"
        >
          點我試用
        </button>
        {/* biome-ignore lint/a11y/useHeadingContent: <explanation> */}
        <h1
          aria-hidden="true"
          className="fixed top-1/2 w-full text-5xl sm:text-[8vw] text-center font-black -translate-y-1/2 z-[2] text-transparent stroke-text"
        >
          加密貨幣 <br />
          投資計算機 <br />
        </h1>
        {/* biome-ignore lint/a11y/useHeadingContent: <explanation> */}
        <h1
          aria-hidden="true"
          className="fixed top-1/2 w-full text-5xl sm:text-[8vw] text-center font-black -translate-y-1/2 z-[2] text-[#804691] mix-blend-screen"
        >
          加密貨幣 <br />
          投資計算機
        </h1>

        {/* ScrollSmoother 控制的區域 */}
        <div id="content" className="w-full overflow-visible">
          <section className="images relative w-full max-w-[1200px] min-h-[300vh] sm:min-h-[150vh] grid grid-cols-[repeat(20,_2%)] grid-rows-[repeat(30,_3%)] mx-auto pt-[60vh] justify-center justify-items-center items-center">
            {imageData.map((src, idx) => (
              <img
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                src={src.url}
                data-speed={src.speed}
                alt=""
                className={src.className}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

const imageData = [
  {
    url: "https://images.unsplash.com/photo-1556856425-366d6618905d?&auto=format&fit=crop&w=400&q=60",
    speed: 0.8,
    className:
      "col-start-1 col-end-8 row-start-1 row-end-6 w-full h-full object-cover",
  },
  {
    url: "https://images.unsplash.com/photo-1520271348391-049dd132bb7c?&auto=format&fit=crop&w=400&q=80",
    speed: 0.9,
    className:
      "col-start-12 col-end-20 row-start-3 row-end-8 w-full h-full object-cover",
  },
  {
    url: "https://images.unsplash.com/photo-1609166214994-502d326bafee?&auto=format&fit=crop&w=400&q=80",
    speed: 1.0,
    className:
      "col-start-5 col-end-15 row-start-9 row-end-13 w-full h-full object-cover",
  },
  {
    url: "https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?&auto=format&fit=crop&w=434&q=80",
    speed: 1.1,
    className:
      "col-start-1 col-end-8 row-start-14 row-end-18 w-full h-full object-cover",
  },
  {
    url: "https://images.unsplash.com/photo-1514689832698-319d3bcac5d5?&auto=format&fit=crop&w=434&q=80",
    speed: 0.9,
    className:
      "col-start-12 col-end-19 row-start-16 row-end-20 w-full h-full object-cover",
  },
  {
    url: "https://images.unsplash.com/photo-1535207010348-71e47296838a?&auto=format&fit=crop&w=300&q=80",
    speed: 1.2,
    className:
      "col-start-2 col-end-9 row-start-20 row-end-25 w-full h-full object-cover",
  },
  {
    url: "https://images.unsplash.com/photo-1588007375246-3ee823ef4851?&auto=format&fit=crop&w=400&q=60",
    speed: 0.8,
    className:
      "col-start-11 col-end-20 row-start-22 row-end-24 w-full h-full object-cover",
  },
  {
    url: "https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?&auto=format&fit=crop&w=400&q=60",
    speed: 1.0,
    className:
      "col-start-5 col-end-15 row-start-26 row-end-30 w-full h-full object-cover",
  },
];
