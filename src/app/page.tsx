import Image from "next/image";
import { redirect } from "next/navigation";

const Home = () => {
  redirect("/Crypto/PositionCalculator");
  return (
    <>
      <p>123</p>
    </>
  );
};

export default Home;
