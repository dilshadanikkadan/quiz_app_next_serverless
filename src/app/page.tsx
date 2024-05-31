import QuizList from "@/components/user/homePage/QuizList/QuizList";
import HeroSection from "@/components/user/homePage/banner/HeroSection";
import MainBanner from "@/components/user/homePage/banner/MainBanner";
import Footer from "@/components/user/layout/Footer";
import Navbar from "@/components/user/layout/Navbar";
import { getMetadata } from "@/utils/metadata/getMetaData";
import Image from "next/image";
const metadata = getMetadata("Home");

export default function Home() {
  return (
    <>
    <Navbar/>
      <MainBanner/>
      <HeroSection/>
      <QuizList/>
      <Footer/>
    </>
  );
}
