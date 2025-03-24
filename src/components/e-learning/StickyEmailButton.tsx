"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BiMailSend } from "react-icons/bi";

export default function StickyEmailButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const mailToLink = `mailto:matheus@beyonders.com.br?subject=${encodeURIComponent(
    "Custom E-learning website - New Quote"
  )}&body=${encodeURIComponent(
    "Hey! I'd like to get a free custom quote for my e-learning platform. Here are the details: ..."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-full"
      >
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-16 bottom-3 translate-y-1/2 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap"
          >
            Request a free quote sending an email and let&apos;s start!
          </motion.div>
        )}
        <div className="absolute bg-green-500 animate-ping transition-all rounded-full w-10 h-10 bottom-2 right-2 flex items-center justify-center shadow-2xl"></div>
        <a
          href={mailToLink}
          className="bg-green-500 relative hover:bg-green-600 transition-all rounded-full w-14 h-14 flex items-center justify-center shadow-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiMailSend className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  );
}
