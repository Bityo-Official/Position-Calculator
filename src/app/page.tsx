// import Image from "next/image";
// import { redirect } from "next/navigation";

import IntroSection from "./_components/IntroSection";

const Home = () => {
  // redirect("/Crypto/PositionCalculator");

  return (
    <main className="text-white bg-black overflow-x-hidden">
      <IntroSection />
    </main>
  );
};

export default Home;
