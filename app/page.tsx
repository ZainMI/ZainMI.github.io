"use client";
import { FaCaretDown } from "react-icons/fa";
import "../css/circles.css";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import PageFadeIn from "@/components/PageFadeIn";
import PageSlideUp from "@/components/PageSlideUp";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [link, setLink] = useState(false);

  const handleProject = () => {
    window.open("/projects#p", "_self");
  };

  useEffect(() => {
    if (inView) {
      setLink(true);
    }
  }, [inView]);

  useEffect(() => {
    if (link) {
      setTimeout(() => {
        handleProject();
      }, 1000);
    }
  }, [link]);

  return (
    <>
      <PageFadeIn />
      {link && <PageSlideUp />}
      <div className="name_container">
        <div className="circles">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
        <h4 className="name">Zain Magdon-Ismail</h4>
        <h1>P.S. I don't like frontend</h1>
        <div className="scroll_to">
          <a
            onClick={() => {
              setLink(true);
            }}
            className="bounce text_color_main"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Projects
            <FaCaretDown size="100px" />
          </a>
        </div>
      </div>
      <div className="divider_background" />
      <div ref={ref} className={"socials"}></div>
    </>
  );
}
