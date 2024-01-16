import { useInView, AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function Stacked({
  filename,
  isVideo,
  children,
  left,
}: {
  filename?: string;
  isVideo?: boolean;
  left?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div
        style={{
          width: "95%",
          height: "95%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {left ? (
            <>
              {isVideo ? (
                <video loop width={"98%"} autoPlay playsInline muted>
                  <source src={filename} type="video/mp4" />
                </video>
              ) : (
                <img src={filename} />
              )}
            </>
          ) : (
            <>{children}</>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            paddingTop: "8px",
          }}
        >
          {!left ? (
            <>
              {isVideo ? (
                <video loop width={"98%"} autoPlay playsInline muted>
                  <source src={filename} type="video/mp4" />
                </video>
              ) : (
                <img src={filename} />
              )}
            </>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>
    </div>
  );
}
