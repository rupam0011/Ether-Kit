import Image from "next/image";

export default function Sidebar({ currentStep }: { currentStep: number }) {
    const steps = [
        { id: 1, label: "Company Details" },
        { id: 2, label: "Project Details" },
        { id: 3, label: "Budget Discussion" },
    ];

    return (
        <div className="w-full lg:w-[280px] flex flex-col gap-8 justify-between">
            <div className="border rounded-[40px] py-8 px-6 border-t-2 border-r-6 border-b-4 border-l bg-[#FFFFFF]">
                <h3 className="text-2xl font-semibold mb-2 bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent">
                    3 Simple Steps
                </h3>
                <p className="text-[16px] text-[#727272] mb-12 leading-5">
                    Tell us about your organization to get started
                </p>

                <div className="space-y-8 ">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`flex items-center gap-3 rounded-xl text-[16px] font-medium  px-2 py-3 transition-all ${step.id === currentStep
                                ? "bg-[#E7DAFE] border-[#000000] text-[#000000] border border-t border-r border-b-3 border-l"
                                : "text-[#00000080]"
                                }`}
                        >
                            <span
                                className={`flex items-center justify-center text-sm w-6 h-6 rounded-[7px] border border-t border-r border-b-2 border-l ${step.id === currentStep
                                    ? "border-[#8A38F5] text-[#9E73E9] bg-[#ffffff]"
                                    : "text-[#00000080] bg-[#DEDEDE]"
                                    }`}
                            >
                                {step.id}
                            </span>
                            {step.label}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#E7DAFE_0%,#FFFFFF_100%)] flex flex-col justify-center items-center gap-2 text-center border-t-2 border-r-6 border-b-4 border-l rounded-[40px] p-6">
                <Image
                    src="/assets/gift-img.svg"
                    alt="gift image"
                    width={100}
                    height={100}
                    quality={100}
                    className="w-[154px] h-auto float-animation"
                />
                <p className=" font-[polysans] font-semibold text-xl leading-5">
                    20% off your project quote or free design consultation!
                </p>
                <button className="mt-5 bg-black text-white rounded-xl px-4 py-3 text-sm w-[177px]">
                    Claim
                </button>
            </div>
        </div>
    );
}
