import Content from "@/components/Content";
import { getProjects } from "@/hooks/getProjects";
import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
import { FaCaretDown } from "react-icons/fa";
import PageSlideUp from "@/components/PageSlideUp";
import PageFadeIn from "@/components/PageFadeIn";
import { useInView } from "framer-motion";
import PageSlideDown from "@/components/PageSlideDown";

export default function Projects() {
  const [about, setAbout] = useState<boolean>(false);
  const [landing, setLanding] = useState<boolean>(false);
  const [stacked, setStacked] = useState<boolean>(false);
  const [viewing, setViewing] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const ref2 = useRef<HTMLDivElement>(null);
  const inView2 = useInView(ref2);

  useEffect(() => {
    setTimeout(() => {
      setViewing(true);
    }, 500);
  }, []);

  useEffect(() => {
    function handleResize() {
      setStacked(window.innerWidth < 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!viewing) return;
    if (inView || landing) {
      setLanding(true);
      setTimeout(() => {
        window.open("/", "_self");
      }, 1000);
    } else if (inView2 || about) {
      setAbout(true);
      setTimeout(() => {
        window.open("/about#a", "_self");
      }, 1000);
    }
  }, [inView, inView2, landing, about]);

  const projects = getProjects({ stacked: stacked });
  return (
    <>
      <PageFadeIn />
      {about && <PageSlideUp />}
      {landing && <PageSlideDown />}
      <div ref={ref} className="divider" />
      <div className="divider" />
      <div className="divider" />
      <div className="section">
        <div className="divider" />
        <div className="header" style={{ position: "relative" }} id="p">
          &#8212; Projects &#8212;
        </div>
        <Content items={projects} />
      </div>
      <div className="goto">
        <a
          onClick={() => {
            setAbout(true);
          }}
          className="bounce text_color_background"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          About
          <FaCaretDown size="100px" />
        </a>
      </div>
      <div className="divider" />
      <div ref={ref2} className="divider" />
    </>
  );
}
