"use client";

import { useState, Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import Sidebar from "./sidebar";
import ToggleSwitch from "@/ui/toggleSwitch";
import { Mic, Paperclip, ChevronDownIcon, Check } from "lucide-react";
import Image from "next/image";
import { Checkbox, Listbox } from "@headlessui/react";

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
    flexibleTimeline: boolean;
    phasedPayments: boolean;
    maintenance: boolean;
    postLaunchSupport: boolean;
}

const Forms = () => {
    const [step, setStep] = useState(1);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        trigger,
        control,
        formState: { errors },
    } = useForm<FormInput>({
        mode: "onTouched",
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
            flexibleTimeline: false,
            phasedPayments: false,
            maintenance: false,
            postLaunchSupport: false,
        },
    });

    const nextStep = async () => {
        let isValid = false;

        // Trigger validations per step
        if (step === 1)
            isValid = await trigger(["companyName", "address", "email", "phone"]);
        else if (step === 2)
            isValid = await trigger([
                "projectName",
                "projectType",
                "platform",
                "projectDescription",
            ]);
        else if (step === 3)
            isValid = await trigger(["budget", "currency", "timeline"]);

        if (isValid) setStep((prev) => Math.min(prev + 1, 3));
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const onSubmit = async (data: FormInput) => {
        if (step < 3) await nextStep();
        else console.log("✅ Final form data:", data);
        reset()
    };

    // Dropdown values
    const currencies = ["USD", "EUR", "INR"];
    const timelines = ["1 month", "3 months", "6 months"];
    const additionalServices = ["UI/UX Design", "SEO", "Marketing"];
    const deliveryFormats = ["PDF", "Figma", "XD"];

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
            <Sidebar currentStep={step} />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-1 border border-t-2 border-r-10 border-b-4 rounded-[40px] px-6 sm:px-8 py-8 bg-white"
            >
                {/* STEP 1 - BUSINESS INFO */}
                {step === 1 && (
                    <>
                        <div className="bg-[#E7DAFE] px-2 py-2 rounded-[10px] w-fit flex justify-center text-sm font-medium text-[#9E73E9] mb-1 border border-black border-b-3">
                            Business Profile
                        </div>

                        <h2 className="text-[34px] sm:text-[45px] xl:text-[55px] font-semibold mb-2 bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent">
                            Your Company Info
                        </h2>
                        <p className="text-[16px] text-[#727272] leading-5">
                            Tell us about your organization to get started
                        </p>

                        <div className="flex flex-col gap-8 pt-35">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {/* Company Name */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm font-semibold text-[#00000099]">
                                        Company Name *
                                    </label>
                                    <input
                                        {...register("companyName", {
                                            required: "Company name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Minimum 2 characters required",
                                            },
                                        })}
                                        placeholder="Search"
                                        className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5"
                                    />
                                    {errors.companyName && (
                                        <p className="text-red-500 text-xs">{errors.companyName.message}</p>
                                    )}
                                </div>

                                {/* Address */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm font-semibold text-[#00000099]">
                                        Address *
                                    </label>
                                    <input
                                        {...register("address", {
                                            required: "Address is required",
                                        })}
                                        placeholder="New York"
                                        className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5"
                                    />
                                    {errors.address && (
                                        <p className="text-red-500 text-xs">{errors.address.message}</p>
                                    )}
                                </div>

                                {/* Website */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm font-semibold text-[#00000099]">
                                        Website (Optional)
                                    </label>
                                    <input
                                        {...register("website", {
                                            pattern: {
                                                value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,4}\/?$/,
                                                message: "Enter a valid website URL",
                                            },
                                        })}
                                        placeholder="www.stake.com"
                                        className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5"
                                    />
                                    {errors.website && (
                                        <p className="text-red-500 text-xs">{errors.website.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Email */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm font-semibold text-[#00000099]">
                                        Email *
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid email format",
                                            },
                                        })}
                                        placeholder="@gmail.com"
                                        className="border border-black border-t border-r-2 border-b-3 rounded-xl px-4 py-2"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm font-semibold text-[#00000099]">
                                        Phone *
                                    </label>
                                    <input
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{10,15}$/,
                                                message: "Enter a valid phone number",
                                            },
                                        })}
                                        placeholder="+91 000000000"
                                        className="border border-black border-t border-r-2 border-b-3 rounded-xl px-4 py-2"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end items-center pt-10 gap-3">
                            <p className="text-[16px] font-medium text-[#727272]">
                                Add more contact details
                            </p>
                            <ToggleSwitch enabled={isEnabled} onToggle={toggleSwitch} />
                        </div>
                    </>
                )}

                {/* STEP 2 - PROJECT INFO */}
                {step === 2 && (
                    <>
                        <div className="bg-[#E7DAFE] px-2 py-2 rounded-[10px] w-fit flex justify-center text-sm font-medium text-[#9E73E9] mb-1 border border-black border-b-3">
                            Project Breakdown
                        </div>

                        <h2 className="text-[30px] sm:text-[45px] xl:text-[55px] font-semibold mb-2 bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent">
                            Tell us about your project
                        </h2>
                        <p className="text-[16px] text-[#727272] leading-5">
                            Help our AI understand what you're building — we'll use this to generate an accurate quote.
                        </p>

                        <div className="flex flex-col gap-8 pt-15">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                                            {...register(id as keyof FormInput, {
                                                required: `${label.replace("*", "").trim()} is required`,
                                            })}
                                            placeholder={placeholder}
                                            className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5"
                                        />
                                        {errors[id as keyof FormInput] && (
                                            <p className="text-red-500 text-xs">
                                                {(errors[id as keyof FormInput] as any)?.message}
                                            </p>
                                        )}
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
                                        {...register("projectDescription", {
                                            required: "Project description is required",
                                            minLength: { value: 20, message: "Minimum 20 characters required" },
                                        })}
                                        placeholder="Briefly describe your project idea, target audience, and goals..."
                                        className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-3 h-[150px] w-full resize-none"
                                    />
                                    <div className="absolute bottom-5 left-4 flex gap-2 text-gray-500 cursor-pointer">
                                        <Paperclip size={30} className="rounded-full p-1 hover:bg-gray-200 transition-all duration-150" />
                                        <Mic size={30} className="rounded-full p-1 hover:bg-gray-200 transition-all duration-150" />
                                    </div>
                                </div>
                                {errors.projectDescription && (
                                    <p className="text-red-500 text-xs">
                                        {errors.projectDescription.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end items-center pt-10 gap-3">
                            <p className="text-[16px] font-medium text-[#727272]">
                                Additional Requirements
                            </p>
                            <ToggleSwitch enabled={isEnabled} onToggle={toggleSwitch} />
                        </div>
                    </>
                )}

                {/* STEP 3 - BUDGET & TIMELINE */}
                {step === 3 && (
                    <>
                        <div className="bg-[#E7DAFE] px-2 py-2 rounded-[10px] w-fit flex justify-center text-sm font-medium text-[#9E73E9] mb-1 border border-black border-b-3">
                            Pocket Friendly
                        </div>

                        <h2 className="text-[30px] sm:text-[45px] xl:text-[55px] font-semibold bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent">
                            Budget & Timeline Discussion
                        </h2>
                        <p className="text-[16px] text-[#727272] leading-5 mb-10">
                            Tell us about your project to get started
                        </p>

                        <div className="flex gap-2 items-center justify-center leading-5 px-4 py-1 bg-[linear-gradient(0deg,#E7DAFE_0%,#FFFFFF_100%)] w-fit rounded-2xl border-black border-t border-r-3 border-b-4 border-l">
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full ">
                                {/* Budget */}
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="budget" className="text-sm font-semibold text-[#00000099]">
                                        Budget Range *
                                    </label>
                                    <input
                                        id="budget"
                                        {...register("budget", {
                                            required: "Budget is required"
                                        })}
                                        placeholder="Your estimated budget *"
                                        className="border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150"
                                    />
                                    {errors.budget && (
                                        <p className="text-red-500 text-xs">{errors.budget.message}</p>
                                    )}
                                </div>

                                {/* Currency with Controller */}
                                <Controller
                                    name="currency"
                                    control={control}
                                    rules={{ required: "Please select a currency" }}
                                    render={({ field }) => (
                                        <Listbox
                                            value={field.value}
                                            onChange={field.onChange}
                                        >
                                            {({ open }) => (
                                                <div className="flex flex-col gap-3 w-full relative">
                                                    <label className="text-sm font-semibold text-[#00000099]">
                                                        Preferred Currency *
                                                    </label>
                                                    <Listbox.Button className={`appearance-none relative border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150 bg-white text-left cursor-pointer ${errors.currency ? 'border-red-500' : ''}`}>
                                                        {field.value || "Select Currency"}
                                                        <ChevronDownIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                                    </Listbox.Button>

                                                    <Listbox.Options transition className="absolute z-10 top-21 w-full bg-white border border-black border-t border-r-2 border-b-3 rounded-2xl max-h-60 overflow-auto shadow-lg">
                                                        {currencies.map((cur) => (
                                                            <Listbox.Option
                                                                key={cur}
                                                                value={cur}
                                                                className={({ active }) =>
                                                                    `cursor-pointer select-none px-4 py-2 ${active ? "bg-purple-100" : ""}`
                                                                }
                                                            >
                                                                {cur}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                    {errors.currency && (
                                                        <p className="text-red-500 text-xs">{errors.currency.message}</p>
                                                    )}
                                                </div>
                                            )}
                                        </Listbox>
                                    )}
                                />

                                {/* Timeline with Controller */}
                                <Controller
                                    name="timeline"
                                    control={control}
                                    rules={{ required: "Please select a timeline" }}
                                    render={({ field }) => (
                                        <Listbox
                                            value={field.value}
                                            onChange={field.onChange}
                                        >
                                            {({ open }) => (
                                                <div className="flex flex-col gap-3 relative">
                                                    <label className="text-sm font-semibold text-[#00000099]">
                                                        Timeline *
                                                    </label>
                                                    <Listbox.Button className={`appearance-none border relative border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150 bg-white text-left cursor-pointer ${errors.timeline ? 'border-red-500' : ''}`}>
                                                        {field.value || "Select Timeline"}
                                                        <ChevronDownIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                                    </Listbox.Button>

                                                    <Listbox.Options transition className="absolute z-10 top-21 mt-1 w-full bg-white border border-black border-t border-r-2 border-b-3 rounded-2xl max-h-60 overflow-auto shadow-lg">
                                                        {timelines.map((t) => (
                                                            <Listbox.Option
                                                                key={t}
                                                                value={t}
                                                                className={({ active }) =>
                                                                    `cursor-pointer select-none px-4 py-2 ${active ? "bg-purple-100" : ""}`
                                                                }
                                                            >
                                                                {t}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                    {errors.timeline && (
                                                        <p className="text-red-500 text-xs">{errors.timeline.message}</p>
                                                    )}
                                                </div>
                                            )}
                                        </Listbox>
                                    )}
                                />
                            </div>

                            {/* Additional Services & Delivery Format */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Additional Services - Optional */}
                                <Controller
                                    name="additionalServices"
                                    control={control}
                                    render={({ field }) => (
                                        <Listbox
                                            value={field.value}
                                            onChange={field.onChange}
                                        >
                                            {({ open }) => (
                                                <div className="flex flex-col gap-3 relative">
                                                    <label className="text-sm font-semibold text-[#00000099]">
                                                        Additional Services
                                                    </label>
                                                    <Listbox.Button className="appearance-none relative border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150 bg-white text-left cursor-pointer">
                                                        {field.value || "Select Additional Service"}
                                                        <ChevronDownIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                                    </Listbox.Button>

                                                    <Listbox.Options transition className="absolute z-10 top-21 mt-1 w-full bg-white border border-black border-t border-r-2 border-b-3 rounded-2xl max-h-60 overflow-auto shadow-lg">
                                                        {additionalServices.map((s) => (
                                                            <Listbox.Option
                                                                key={s}
                                                                value={s}
                                                                className={({ active }) =>
                                                                    `cursor-pointer select-none px-4 py-2 ${active ? "bg-purple-100" : ""}`
                                                                }
                                                            >
                                                                {s}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </div>
                                            )}
                                        </Listbox>
                                    )}
                                />

                                {/* Delivery Format - Optional */}
                                <Controller
                                    name="deliveryFormat"
                                    control={control}
                                    render={({ field }) => (
                                        <Listbox
                                            value={field.value}
                                            onChange={field.onChange}
                                        >
                                            {({ open }) => (
                                                <div className="flex flex-col gap-3 relative">
                                                    <label className="text-sm font-semibold text-[#00000099]">
                                                        Delivery Format (Optional)
                                                    </label>
                                                    <Listbox.Button className="appearance-none relative border border-black border-t border-r-2 border-b-3 rounded-2xl px-4 py-2.5 w-full focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition duration-150 bg-white text-left cursor-pointer">
                                                        {field.value || "Select Delivery Format"}
                                                        <ChevronDownIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                                    </Listbox.Button>

                                                    <Listbox.Options transition className="absolute z-10 top-21 mt-1 w-full bg-white border border-black border-t border-r-2 border-b-3 rounded-2xl max-h-60 overflow-auto shadow-lg">
                                                        {deliveryFormats.map((d) => (
                                                            <Listbox.Option
                                                                key={d}
                                                                value={d}
                                                                className={({ active }) =>
                                                                    `cursor-pointer select-none px-4 py-2 ${active ? "bg-purple-100" : ""}`
                                                                }
                                                            >
                                                                {d}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </div>
                                            )}
                                        </Listbox>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row justify-around gap-8 xl:gap-6 mt-15">
                            {[
                                { id: "flexibleTimeline", label: "Flexible Timeline" },
                                { id: "phasedPayments", label: "Open to phased payments" },
                                { id: "maintenance", label: "Include maintenance & updates" },
                                { id: "postLaunchSupport", label: "Include Post-launch Support" },
                            ].map(({ id, label }) => (
                                <div key={id} className="flex justify-between xl:justify-start items-center gap-4 ">
                                    <label
                                        htmlFor={id}
                                        className="text-[14px] font-bold text-[#00000099] cursor-pointer select-none"
                                    >
                                        {label}
                                    </label>
                                    <Checkbox
                                        checked={!!watch(id as keyof FormInput)}
                                        onChange={(checked) => setValue(id as keyof FormInput, checked)}
                                        className={({ checked }) =>
                                            `relative w-5 h-5 flex items-center justify-center rounded-sm border-black border-t border-r border-b-2 border-l cursor-pointer transition-all duration-150
${checked ? "bg-[#B287FD]" : "bg-white hover:bg-gray-100"}`
                                        }
                                    >
                                        {({ checked }) => checked ? (
                                            <Check className="w-4 h-4 text-white stroke-[3px]" />
                                        ) : <></>}
                                    </Checkbox>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-10 mt-10">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="border border-[#acacac] w-[123px] rounded-xl px-6 py-2 hover:bg-gray-100 shadow-[0_3.7px_0_0_#acacac] hover:-translate-y-px active:translate-y-px transition-transform duration-150 cursor-pointer"
                        >
                            Back
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-[#B287FD] text-white w-[123px] py-2 rounded-xl shadow-[0_3.7px_0_0_#624A8B] hover:-translate-y-px active:translate-y-px transition-transform duration-150 cursor-pointer"
                    >
                        {step === 3 ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Forms;