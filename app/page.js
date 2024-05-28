import Image from "next/image";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Expertise from "./components/Expertise";
import Blogs from "./components/Blogs";
import Community from "./components/Community";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <Community/> */}
      <Expertise/>
      <Blogs/>
    </div>
  );
}
