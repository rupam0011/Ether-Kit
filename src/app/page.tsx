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
        <div className="w-full flex justify-around ">
          <div className=" w-[34%] flex flex-col gap-5 justify-center">
            <div className="bg-[#E7DAFE] px-1.5 py-1.5 border-y-[2.4px] border-x-[0.4px] border-[#B287FD] w-[236px] rounded-[10px]">
              <p className="text-[14px] text-[#B287FD]  font-medium">24-hour quote guarantee or it's free</p>
            </div>
            <h1 className="text-[44px] leading-[52px] text-[#000000]">Get Accurate Software <br /> Quotes in 24 Hours</h1>
            <p className="text-[#6A6A6A] font-normal">
              Our AI-powered platform evaluates your requirements and delivers detailed, competitive pricing from vetted development teams. Skip the endless back-and-forth and get straight to building.
            </p>
            <button className="relative mt-5 text-[14px] font-medium rounded-xl w-[249px] px-2.5 py-2.5 bg-[#B287FD] text-white shadow-[0_3.7px_0_0_#624A8B] hover:-translate-y-px active:translate-y-px  transition-transform duration-150 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="w-fit  ">
            <Image
              src={"/assets/landing-img.svg"}
              alt="landing image"
              width={100}
              height={100}
              quality={100}
              className="w-[586px] h-auto float-animation"
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
