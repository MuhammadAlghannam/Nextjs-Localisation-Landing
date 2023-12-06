"use client";

// nextjs
import { useState, useRef } from "react";

//  componenets
import TopHead from "../custom/component/TopHead";
import CustomButton from "../custom/component/CustomButton";

// form
import { useForm } from "react-hook-form";

// animation
import { LazyMotion, domAnimation, m } from "framer-motion";

// toast
import { toast } from "react-toastify";

// emailjs
import emailjs from "@emailjs/browser";

export default function RegesterForm({
  toaste,
  supTitle1,
  supTitle2,
  required1,
  placeholder1,
  required2,
  placeholder2,
  required3,
  placeholder3,
  required4,
  subRequired4,
  placeholder4,
  required5,
  placeholder5,
  required6,
  placeholder6,
  btn,
  loadingBtn,
}) {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  // 1. Define form.
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // 2. Define a submit handler.
  const onSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      emailjs
        .sendForm(
          "service_3gb21ss",
          "template_1ds9qcu",
          form.current,
          "FdWQ61zFXVZJEB2fP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
      setLoading(false);
      toast.success(toaste, {
        theme: "colored",
      });
    }, 2000);

    reset();
  };

  return (
    <section id="regest" className="pt-6 sm:pt-16">
      {/* top head */}
      <TopHead title={supTitle1} desc={supTitle2} />
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-[2.5em]"
        >
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            {/* first */}
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              {/* username */}
              <div className="w-full">
                <input
                  id="user_name"
                  type="text"
                  {...register("user_name", {
                    required: required1,
                  })}
                  className={`border border-[#ced4da] rounded-md py-3 px-2 my-[0.5em] text-mainGray focus:outline-none w-full ${
                    errors?.user_name
                      ? "border-[rgb(239,68,68)]"
                      : "border-[#ced4da]"
                  }`}
                  placeholder={placeholder1}
                />
                {errors?.user_name && (
                  <div className="text-red-500">{errors.user_name.message}</div>
                )}
              </div>
              {/* age */}
              <div className="w-full">
                <input
                  id="user_age"
                  type="number"
                  {...register("user_age", {
                    required: required2,
                  })}
                  className={`border border-[#ced4da] rounded-md py-3 px-2 my-[0.5em] text-mainGray focus:outline-none w-full ${
                    errors?.user_age
                      ? "border-[rgb(239,68,68)]"
                      : "border-[#ced4da]"
                  }`}
                  placeholder={placeholder2}
                />
                {errors?.user_age && (
                  <div className="text-red-500">{errors.user_age.message}</div>
                )}
              </div>
            </div>

            {/* second */}
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              {/* phone */}
              <div className="w-full">
                <input
                  id="user_phone"
                  type="text"
                  {...register("user_phone", {
                    required: required3,
                  })}
                  className={`border border-[#ced4da] rounded-md py-3 px-2 my-[0.5em] text-mainGray focus:outline-none w-full ${
                    errors?.user_phone
                      ? "border-[rgb(239,68,68)]"
                      : "border-[#ced4da]"
                  }`}
                  placeholder={placeholder3}
                />
                {errors?.user_phone && (
                  <div className="text-red-500">
                    {errors.user_phone.message}
                  </div>
                )}
              </div>
              {/* email */}
              <div className="w-full">
                <input
                  id="user_email"
                  type="email"
                  {...register("user_email", {
                    required: required4,
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: subRequired4,
                    },
                  })}
                  className={`border border-[#ced4da] rounded-md py-3 px-2 my-[0.5em] text-mainGray focus:outline-none w-full ${
                    errors?.user_email
                      ? "border-[rgb(239,68,68)]"
                      : "border-[#ced4da]"
                  }`}
                  placeholder={placeholder4}
                />
                {errors?.user_email && (
                  <div className="text-red-500">
                    {errors.user_email.message}
                  </div>
                )}
              </div>
            </div>

            {/* third */}
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              {/* jop */}
              <div className="w-full">
                <input
                  id="user_jop"
                  type="text"
                  {...register("user_jop", {
                    required: required5,
                  })}
                  className={`border border-[#ced4da] rounded-md py-3 px-2 my-[0.5em] text-mainGray focus:outline-none w-full ${
                    errors?.user_jop
                      ? "border-[rgb(239,68,68)]"
                      : "border-[#ced4da]"
                  }`}
                  placeholder={placeholder5}
                />
                {errors?.user_jop && (
                  <div className="text-red-500">{errors.user_jop.message}</div>
                )}
              </div>
              {/* qulifications */}
              <div className="w-full">
                <input
                  id="user_quli"
                  type="text"
                  {...register("user_quli", {
                    required: required6,
                  })}
                  className={`border border-[#ced4da] rounded-md py-3 px-2 my-[0.5em] text-mainGray focus:outline-none w-full ${
                    errors?.user_quli
                      ? "border-[rgb(239,68,68)]"
                      : "border-[#ced4da]"
                  }`}
                  placeholder={placeholder6}
                />
                {errors?.user_quli && (
                  <div className="text-red-500">{errors.user_quli.message}</div>
                )}
              </div>
            </div>

            <div className="w-full mx-auto text-center mt-[1em]">
              <CustomButton
                btnValue="Send"
                btnDisable={loading}
                btnType="submit"
                title={loading ? loadingBtn : btn}
                containerStyles={`bg-secondary ${
                  loading ? "bg-yellowHover" : "bg-secondary"
                } font-semibold text-md text-white rounded-full hover:bg-yellowHover sm:w-[30%] w-[50%] shadow-sm`}
              />
            </div>
          </form>
        </m.div>
      </LazyMotion>
    </section>
  );
}
