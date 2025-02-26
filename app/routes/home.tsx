import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/Components/header";
import HomePage from "~/Components/home";
import AnimatedCircles from "~/Components/CircleAnimation";
import ReferralBenefits from "~/Components/refreral-benifits";
import FAQ from "~/Components/faq-page";
import Footer from "~/Components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {
  return (
    <>
    <Header/> 
    <HomePage />
    <AnimatedCircles />
    <ReferralBenefits />
    <FAQ/>
    <Footer/>
    </>
  );
}
