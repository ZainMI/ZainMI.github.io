import { useEffect, useRef, useState } from "react";
import Stacked from "./Stacked";
import { useInView, AnimatePresence, motion } from "framer-motion";

export default function Left({
  filename,
  isVideo,
  children,
  right,
  stacked,
}: {
  filename?: string;
  isVideo?: boolean;
  right?: boolean;
  children: React.ReactNode;
  stacked: boolean;
}) {
  return !stacked ? (
    <div className="container hidden">
      <div
        style={{
          width: "95%",
          height: "95%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          {!right ? (
            <>
              {isVideo ? (
                <video loop width={"98%"} autoPlay playsInline muted>
                  <source src={filename} type="video/mp4" />
                </video>
              ) : (
                <img src={filename} width={"98%"} />
              )}
            </>
          ) : (
            <>{children}</>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "40%",
          }}
        >
          {right ? (
            <>
              {isVideo ? (
                <video loop width={"98%"} autoPlay playsInline muted>
                  <source src={filename} type="video/mp4" />
                </video>
              ) : (
                <img src={filename} width={"98%"} />
              )}
            </>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Stacked filename={filename} isVideo={isVideo} left={right}>
      {children}
    </Stacked>
  );
}
