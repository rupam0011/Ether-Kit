import Forms from "@/components/from";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full max-w-[1680px] mx-auto px-8 sm:px-10 xl:px-16">
      <Navbar />

      <main className="w-full">
        {/* Hero section */}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10 items-center lg:justify-around  py-5">
          <div className="w-full md:w-[70%] lg:w-[42%] xl:w-[34%] flex flex-col gap-5 items-center lg:items-start justify-center ">
            <div className="bg-[#E7DAFE] px-2 py-1.5 border-y-[2.4px] border-x-[0.4px] border-[#B287FD] w-fit rounded-[10px]">
              <p className="text-[14px] text-[#B287FD] font-medium">24-hour quote guarantee or it's free</p>
            </div>
            <h1 className="text-[34px] sm:text-4xl 2xl:text-[44px] text-center lg:text-start leading-[52px] text-[#000000]">Get Accurate Software <br /> Quotes in 24 Hours</h1>
            <p className="text-sm sm:text-[16px] text-center lg:text-start text-[#6A6A6A] font-normal">
              Our AI-powered platform evaluates your requirements and delivers detailed, competitive pricing from vetted development teams. Skip the endless back-and-forth and get straight to building.
            </p>
            <button className="relative mt-5 text-[14px] font-medium rounded-xl w-[249px] px-2.5 py-2.5 bg-[#B287FD] text-white shadow-[0_3.7px_0_0_#624A8B] hover:-translate-y-px active:translate-y-px  transition-transform duration-150 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="w-fit ">
            <Image
              src={"/assets/landing-img.svg"}
              alt="landing image"
              width={100}
              height={100}
              quality={100}
              className="w-full  sm:w-[486px] 2xl:w-[586px] h-auto float-animation"
            />
          </div>
        </div>

        {/* Form section */}

        <div className="py-15">
          <Forms />
        </div>

      </main>

    </div>
  );
}
