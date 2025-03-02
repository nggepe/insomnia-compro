import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex justify-center items-center bg-center bg-cover text-[#EAEAEA] overflow-hidden"
      style={{ backgroundImage: "url('/bg-hero.png')", height: "calc(100vh - 92.63px)"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="relative flex flex-col justify-between items-center h-full z-10 text-center max-w-5xl p-6">
        <div>
          <div className="text-xl/tight md:text-4xl/snug font-bold tracking-wide mb-6">
            Bridging creativity and technology to deliver expectational
            experiences
          </div>
          <div className="text-sm md:text-xl/tight tracking-wide">
            We&#39;re a team of expert designers, software developers and
            marketers who&#39;ve been delivering digital products
          </div>
        </div>

        <div>
          <CTAButton className="text-sm md:text-lg md:px-7 md:py-5 rounded-2xl">
            Contact Us
          </CTAButton>
        </div>

        <div className="mb-10">
          <div className="text-sm md:text-xl/tight tracking-wide mb-6 text-center items-center justify-center">
            It&#39;s a never-ending story of many incredible ideas
          </div>
          <div className="flex justify-center">
            <Link href="/" className="text-center">
              <Image
                src={"/arrow-hero.png"}
                alt="Insomnia Creative & Digital Agency"
                width={30}
                height={0}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
