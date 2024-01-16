import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import PageFadeIn from "@/components/PageFadeIn";
import { useInView } from "framer-motion";
import PageSlideDown from "@/components/PageSlideDown";
import { ImGithub } from "react-icons/im";
import { IoIosPaper } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

export default function About() {
  const [about, setAbout] = useState<boolean>(false);
  const [stacked, setStacked] = useState<boolean>(false);
  const [viewing, setViewing] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const inView = useInView(ref);

  useEffect(() => {
    setTimeout(() => {
      setViewing(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    function handleResize() {
      setStacked(window.innerWidth < 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!viewing) return;
    if (inView || about) {
      setAbout(true);
      setTimeout(() => {
        window.open("/about#a", "_self");
      }, 1000);
    }
  }, [inView, about]);

  return (
    <>
      <PageFadeIn />
      {about && <PageSlideDown />}
      <div ref={ref} className="divider" />
      <div className="divider" />
      <div className="divider" />
      <div className="section">
        <div className="divider" />
        <div className="header" style={{ position: "relative" }} id="s">
          &#8212; Socials &#8212;
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div className="social_container">
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "10vw",
                alignContent: "center",
                justifyContent: "center",
                marginTop: "30vh",
              }}
            >
              <a
                href="mailto:zainmagdon@gmail.com"
                style={{ height: "5vw", width: "5vw", borderRadius: "50%" }}
              >
                <button className="social">
                  <IoMailOutline size={"2.5vw"} />
                </button>
              </a>
              <a
                href="./resume.pdf"
                download
                style={{ height: "5vw", width: "5vw", borderRadius: "50%" }}
              >
                <button className="social">
                  <IoIosPaper size={"2.5vw"} />
                </button>
              </a>
              <a
                href="https://github.com/ZainMI"
                target="_blank"
                style={{ height: "5vw", width: "5vw", borderRadius: "50%" }}
              >
                <button className="social">
                  <ImGithub size={"2.5vw"} />
                </button>
              </a>
              <a
                onClick={() => {
                  navigator.clipboard.writeText("5189030056");
                  setCopied(true);
                }}
                style={{
                  height: "5vw",
                  width: "5vw",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <button className="social">
                  {copied ? (
                    <>
                      <CiCircleCheck size={"2.5vw"} />
                      Copied
                    </>
                  ) : (
                    <FaPhoneAlt size={"2.5vw"} />
                  )}
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/zain-magdon-ismail-b406b0213/"
                target="_blank"
                style={{ height: "5vw", width: "5vw", borderRadius: "50%" }}
              >
                <button className="social">
                  <FaLinkedin size={"2.5vw"} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
