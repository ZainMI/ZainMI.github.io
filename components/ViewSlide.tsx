import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ViewSlide({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: "-100%", filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0)" }}
            transition={{ duration: 1, delay: 1 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
