import CTAButton from "./CTAButton";
import SideTitle from "./SideTitle";

export default function Introduction() {
  return (
    <section id="introduction" className="relative px-6 py-8 md:px-12 md:py-16 bg-[#1F1F1F] text-white">
      <SideTitle className="absolute top-20 -left-9">ABOUT US</SideTitle>
      <div className="flex flex-col gap-8 px-8 py-3">
        <div className="text-2xl md:text-4xl font-semibold tracking-wide">
          Your Vision, Our Creative Mission
        </div>
        <hr className="w-full"></hr>
        <div className="relative flex flex-row gap-12 pb-20 md:pb-0">
          <div className="w-full md:w-[70%] text-base/relaxed md:text-lg/relaxed tracking-wide text-[#BBBBBB]">
          Welcome to <b>Insomnia Creative and Digital Agency</b>, where sleepless dedication meets boundless creativity. We specialize in empowering small business owners to expand their reach and thrive in the ever-evolving digital landscape. From crafting stunning websites to mastering platforms like Instagram, TikTok, Facebook, and YouTube, we ensure your brand stands out where it matters most. Our mission is simple: to create powerful funnels that turn engagement into sales, helping your business achieve measurable growth. With us, you&#39;re not just building an online presence—you&#39;re building success.
          </div>
          <CTAButton className="absolute bottom-0 md:top-0 right-0 text-black text-sm md:text-lg h-fit">
            Know more &#8594;
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
