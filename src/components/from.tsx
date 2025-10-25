"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./sidebar";
import ToggleSwitch from "@/ui/toggleSwitch";
import { Mic, Paperclip } from "lucide-react";
import Image from "next/image";

interface FormInput {
    companyName: string;
    address: string;
    website: string;
    email: string;
    phone: string;
    projectName: string;
    projectType: string;
    platform: string;
    projectDescription: string;
    budget: string;
    currency: string;
    timeline: string;
    additionalServices: string;
    deliveryFormat: string;
}

const Forms = () => {
    const [step, setStep] = useState(1);

    // Use state to manage the checked status of the switch
    const [isEnabled, setIsEnabled] = useState(false);

    // Function to handle the toggle action
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    };

    const { register, handleSubmit } = useForm<FormInput>({
        defaultValues: {
            companyName: "",
            address: "",
            website: "",
            email: "",
            phone: "",
            projectName: "",
            projectType: "",
            platform: "",
            projectDescription: "",
            budget: "",
            currency: "",
            timeline: "",
            additionalServices: "",
            deliveryFormat: "",
        },
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));



    const onSubmit = (data: FormInput) => {
        if (step < 3) {
            nextStep();
        } else {
            console.log("✅ Final form data:", data);
        }
    };

    return (
        <div className="flex gap-8 w-full">
            <Sidebar currentStep={step} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-1 border border-t-2 border-r-10 border-b-4 rounded-[40px] p-8 bg-white"
            >
                {/* 🧾 STEP 1 — Company Info */}
                {step === 1 && (
                    <>
                        <div className="bg-[#E7DAFE] px-2 py-2 rounded-[10px] w-fit flex justify-center text-sm font-medium text-[#9E73E9] mb-1 border border-black border-b-3">
                            Business Profile
                        </div>

                        <h2 className="text-[55px] font-semibold mb-2 bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent">
                            Your Company Info
                        </h2>
                        <p className="text-[16px] text-[#727272]  leading-5">
                            Tell us about your organization to get started
                        </p>

                        <div className="flex flex-col gap-8 pt-35">
                            <div className="grid grid-cols-3 gap-5">
                                {[
                                    { id: "companyName", label: "Company Name *", placeholder: "Search" },
                                    { id: "address", label: "Address *", placeholder: "New York" },
                                    { id: "website", label: "Website (Optional)", placeholder: "www.stake.com" },
                                ].map(({ id, label, placeholder }) => (
                                    <div className="flex flex-col gap-3" key={id}>
                                        <label htmlFor={id} className="text-sm font-semibold text-[#00000099]">
                                            {label}
                                        </label>
                                        <input
                                            id={id}
                                            {...register(id as keyof FormInput, { required: label.includes("*") })}
                                            placeholder={placeholder}
                                            className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                {[
                                    { id: "email", label: "Email *", placeholder: "@gmail.com" },
                                    { id: "phone", label: "Phone *", placeholder: "+91 000000000" },
                                ].map(({ id, label, placeholder }) => (
                                    <div className="flex flex-col gap-3" key={id}>
                                        <label htmlFor={id} className="text-sm font-semibold text-[#00000099]">
                                            {label}
                                        </label>
                                        <input
                                            id={id}
                                            {...register(id as keyof FormInput, { required: true })}
                                            placeholder={placeholder}
                                            className="border border-black border-t border-r-2 border-b-3 rounded-xl px-4 py-2 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end items-center pt-10 gap-3">
                            <p className="text-[16px] font-medium text-[#727272]">Add more contact details</p>
                            <ToggleSwitch enabled={isEnabled} onToggle={toggleSwitch} />
                        </div>

                    </>
                )}

                {/* 🧾 STEP 2 — Project Details */}
                {step === 2 && (
                    <>
                        <div className="bg-[#E7DAFE] px-2 py-2 rounded-[10px] w-fit flex justify-center text-sm font-medium text-[#9E73E9] mb-1 border border-black border-b-3">
                            Project Breakdown
                        </div>

                        <h2 className="text-[55px] font-semibold mb-2 bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent">
                            Tell us about your project
                        </h2>
                        <p className="text-[16px] text-[#727272] leading-5">
                            Help our AI understand what you’re building — we’ll use this to generate an accurate quote.
                        </p>

                        <div className="flex flex-col gap-8 pt-15">
                            <div className="grid grid-cols-3 gap-5">
                                {[
                                    { id: "projectName", label: "Project Name *", placeholder: "Ex: Portfolio Website" },
                                    { id: "projectType", label: "Project Type *", placeholder: "Web App / Ecommerce / Landing" },
                                    { id: "platform", label: "Platform *", placeholder: "Next.js / React / WordPress" },
                                ].map(({ id, label, placeholder }) => (
                                    <div className="flex flex-col gap-3" key={id}>
                                        <label htmlFor={id} className="text-sm font-semibold text-[#00000099]">
                                            {label}
                                        </label>
                                        <input
                                            id={id}
                                            {...register(id as keyof FormInput, { required: true })}
                                            placeholder={placeholder}
                                            className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="projectDescription" className="text-sm font-semibold text-[#00000099] flex gap-3 items-center">
                                    Project Description *
                                    <span className="flex gap-2 items-center">
                                        <Image
                                            src="/assets/ai-img.svg"
                                            alt="ai image"
                                            width={100}
                                            height={100}
                                            quality={100}
                                            className="w-8 h-auto"
                                        />
                                        <p className="font-bold text-[12px] text-[#B287FD]">
                                            Write with AI
                                        </p>
                                    </span>
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="projectDescription"
                                        {...register("projectDescription", { required: true })}
                                        placeholder="Briefly describe your project idea, target audience, and goals..."
                                        className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-3 h-[150px] w-full focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150 resize-none"
                                    />

                                    {/* ICONS positioned inside bottom-right corner */}
                                    <div className="absolute bottom-5 left-4 flex gap-2 text-gray-500 cursor-pointer">
                                        <Paperclip size={30} className=" rounded-full p-1 hover:bg-gray-200 transition-all duration-150" />
                                        <Mic size={30} className=" rounded-full p-1 hover:bg-gray-200 transition-all duration-150" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center pt-10 gap-3">
                            <p className="text-[16px] font-medium text-[#727272]">Additional Requirements</p>
                            <ToggleSwitch enabled={isEnabled} onToggle={toggleSwitch} />
                        </div>
                    </>
                )}

                {/* 🧾 STEP 3 — Budget & Preferences */}
                {step === 3 && (
                    <>
                        <div className="bg-[#E7DAFE] px-2 py-2 rounded-[10px] w-fit flex justify-center text-sm font-medium text-[#9E73E9] mb-1 border border-black border-b-3">
                            Pocket Friendly
                        </div>

                        <h2 className="text-[55px] font-semibold  bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent">
                            Budget & Timeline Discussion
                        </h2>
                        <p className="text-[16px] text-[#727272] leading-5 mb-10">
                            Tell us about your project to get started
                        </p>
                        <div className=" flex gap-2 items-center justify-center leading-5 px-4 py-1 bg-[linear-gradient(0deg,#E7DAFE_0%,#FFFFFF_100%)] w-fit rounded-2xl border-black border-t border-r-3 border-b-4 border-l">
                            <Image
                                src="/assets/ai-img.svg"
                                alt="ai image"
                                width={100}
                                height={100}
                                quality={100}
                                className="w-[55px] h-auto"
                            />
                            <p className="text-[14px] text-[#624A8B] font-bold ">
                                Based on your project details, we estimate a delivery of 4–6 weeks with a $30,000–$50,000 range.
                            </p>
                        </div>
                        <p className="text-[16px] text-[#727272] leading-5 mt-4">
                            Adjust your preferences below for a tailored estimate.
                        </p>

                        <div className="flex flex-col gap-8 pt-8">
                            <div className="grid grid-cols-3 gap-5">
                                {/* Budget Field */}
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="budget" className="text-sm font-semibold text-[#00000099]">
                                        Budget Range *
                                    </label>
                                    <input
                                        id="budget"
                                        {...register("budget", { required: true })}
                                        placeholder="Your estimated budget *"
                                        className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150"
                                    />
                                </div>

                                {/* Currency */}
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="currency" className="text-sm font-semibold text-[#00000099]">
                                        Preferred Currency *
                                    </label>

                                    {/* wrapper that controls positioning */}
                                    <div className="relative w-full">
                                        <select
                                            id="currency"
                                            {...register("currency", { required: true })}
                                            className="appearance-none border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full 
        focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150 
        bg-white pr-10 cursor-pointer"
                                        >
                                            <option value="">Select Currency</option>
                                            <option value="usd">USD</option>
                                            <option value="eur">EUR</option>
                                            <option value="inr">INR</option>
                                        </select>

                                        {/* custom arrow icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#6A4DE8"
                                            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="relative flex flex-col gap-3">
                                    <label
                                        htmlFor="timeline"
                                        className="text-sm font-semibold text-[#00000099]"
                                    >
                                        Timeline *
                                    </label>

                                    <div className="relative w-full">
                                        <select
                                            id="timeline"
                                            {...register("timeline", { required: true })}
                                            className="appearance-none border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150 bg-white pr-10 cursor-pointer"
                                        >
                                            <option value="">Select Timeline</option>
                                            <option value="1_month">1 month</option>
                                            <option value="3_months">3 months</option>
                                            <option value="6_months">6 months</option>
                                        </select>

                                        {/* Custom arrow icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#6A4DE8"
                                            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-5">

                                {/* Additional Services */}
                                <div className="flex flex-col gap-3">
                                    <label
                                        htmlFor="additionalServices"
                                        className="text-sm font-semibold text-[#00000099]"
                                    >
                                        Additional Services
                                    </label>

                                    {/* Wrapper for select and arrow icon */}
                                    <div className="relative w-full">
                                        <select
                                            id="additionalServices"
                                            {...register("additionalServices")}
                                            className="appearance-none border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full
      focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150
      bg-white pr-10 cursor-pointer"
                                        >
                                            <option value="">Select Additional Service</option>
                                            <option value="uiux">UI/UX Design</option>
                                            <option value="seo">SEO</option>
                                            <option value="marketing">Marketing</option>
                                        </select>

                                        {/* Custom arrow icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#6A4DE8"
                                            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>


                                {/* Delivery Format */}
                                <div className="flex flex-col gap-3">
                                    <label
                                        htmlFor="deliveryFormat"
                                        className="text-sm font-semibold text-[#00000099]"
                                    >
                                        Delivery Format *
                                    </label>

                                    {/* Wrapper for select and arrow icon */}
                                    <div className="relative w-full">
                                        <select
                                            id="deliveryFormat"
                                            {...register("deliveryFormat", { required: true })}
                                            className="appearance-none border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full
      focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150
      bg-white pr-10 cursor-pointer"
                                        >
                                            <option value="">Select Delivery Format</option>
                                            <option value="pdf">PDF</option>
                                            <option value="figma">Figma</option>
                                            <option value="xd">XD</option>
                                        </select>

                                        {/* Custom arrow icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#6A4DE8"
                                            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-10 mt-10 ">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="border border-[#acacac] w-[123px] rounded-xl px-6 py-2 hover:bg-gray-100 shadow-[0_3.7px_0_0_#acacac] hover:-translate-y-px active:translate-y-px  transition-transform  duration-150 cursor-pointer"
                        >
                            Back
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-[#B287FD] text-white w-[123px] rounded-xl shadow-[0_3.7px_0_0_#624A8B] hover:-translate-y-px active:translate-y-px  transition-transform  duration-150 cursor-pointer px-6 py-2 hover:bg-[#9a6cfb] "
                    >
                        {step === 3 ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Forms;
