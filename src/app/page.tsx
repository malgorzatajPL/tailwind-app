import Banner from "@/components/banner";
import PricingCards from "@/components/cards";
import Carousel from "@/components/carousel";
import Main from "@/components/main";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Carousel />
        <Main />
        <PricingCards />
        <Banner />
      </main>
    </>
  );
}
