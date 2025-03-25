"use client";
import Script from "next/script";
import { useEffect } from "react";

export const ContactForm = () => {
  useEffect(() => {
    if (window)
      window.addEventListener("message", function (event) {
        if (
          event.data.type === "hsFormCallback" &&
          event.data.eventName === "onFormSubmitted"
        ) {
          console.log("Event Triggered");
          // @ts-ignore
          window.gtag("event", "conversion", {
            send_to: "AW-16877219122/sLanCPaR7KwaELLa1-8-",
            value: 1.0,
            currency: "BRL",
          });
        }
      });
  }, []);

  return (
    <section
      id="elearning-contact"
      className="font-poppins font-semibold w-full flex flex-col justify-center items-center bg-black py-10"
    >
      <Script
        src="https://js.hsforms.net/forms/embed/49196676.js"
        defer
      ></Script>
      <div
        className="hs-form-frame w-full max-w-4xl flex flex-col justify-center items-center"
        data-region="na1"
        data-form-id="4503cca1-a579-4de5-8ce8-4c7137ddcff1"
        data-portal-id="49196676"
      ></div>
    </section>
  );
};
