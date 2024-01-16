import { AnimatePresence, motion } from "framer-motion";
import next from "next";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  items: JSX.Element[];
}
export default function Content({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>();

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex(
      (prevIndex: number) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="content">
        <div className="left" onClick={prevSlide}></div>
        <div className="right" onClick={nextSlide}></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: direction === "next" ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="left_arrow">
              <FaChevronLeft size={"30px"} />
            </div>
            {items[currentIndex]}
            <div className="right_arrow">
              <FaChevronRight size={"30px"} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <h4
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          transition: "height 0.5s ease-in-out, width 0.5s ease-in-out",
        }}
      >
        {items.map((item, index) =>
          index === currentIndex ? (
            <div key={index} className="dot_bold" />
          ) : (
            <div key={index} className="dot" />
          )
        )}
      </h4>
    </div>
  );
}
