
import Layout from "../Components/LayoutNav";
import Hero from "../Components/Hero";
import VantaSection from "@/Components/Vantas";
import CounterSection from "@/Components/CounterSection";
import InfoCards from "@/Components/Infocard";
import NewsList from "@/Components/News";
import Events from "@/Components/Event";
import Footer from "../Components/Footer";




  


export default function Landing() {
  return (
    <Layout>
      <div className="scroll-smooth pt-12 w-full bg-green min-h-screen flex flex-col items-center">
        <div className="w-full px-0"> 
          <Hero />
          <VantaSection />
          <CounterSection />
          <InfoCards />
          <NewsList />
          <Events />
          <Footer />
        </div>
      </div>
    </Layout>
  );
}
