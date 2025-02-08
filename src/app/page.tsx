import Introduction from "@/components/Introduction";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
      </main>
    </>
  );
}
