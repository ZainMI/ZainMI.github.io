import Content from "@/components/Content";
import ViewSlide from "@/components/ViewSlide";
import { getProjects } from "@/hooks/getProjects";
import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
import {
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaLinkedin,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { VscGithubInverted } from "react-icons/vsc";
import PageSlideUp from "@/components/PageSlideUp";
import PageFadeIn from "@/components/PageFadeIn";
import PageSlideLeft from "@/components/PageSlideLeft";
import PageSlideRight from "@/components/PageSlideRight";
import { useInView } from "framer-motion";
import PageSlideDown from "@/components/PageSlideDown";
import { getAbout } from "@/hooks/getAbout";

export default function About() {
  const [projects, setProjects] = useState<boolean>(false);
  const [socials, setSocials] = useState<boolean>(false);
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
    if (inView || projects) {
      setProjects(true);
      setTimeout(() => {
        window.open("/projects#p", "_self");
      }, 1000);
    } else if (inView2 || socials) {
      setSocials(true);
      setTimeout(() => {
        window.open("/socials#s", "_self");
      }, 1000);
    }
  }, [inView, inView2, socials, projects]);

  const about = getAbout({ stacked: stacked });
  return (
    <>
      <PageFadeIn />
      {socials && <PageSlideUp />}
      {projects && <PageSlideDown />}
      <div ref={ref} className="divider" />
      <div className="divider" />
      <div className="divider" />
      <div className="section">
        <div className="divider" />
        <div className="header" style={{ position: "relative" }} id="a">
          &#8212; About &#8212;
        </div>
        <Content items={about} />
      </div>
      <div className="goto">
        <a
          onClick={() => {
            setSocials(true);
          }}
          className="bounce text_color_background"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Socials
          <FaCaretDown size="100px" />
        </a>
      </div>
      <div className="divider" />
      <div className="divider" />
      <div ref={ref2} className="divider" />
    </>
  );
}
