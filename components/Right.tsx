import { useEffect, useRef, useState } from "react";
import Stacked from "./Stacked";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function Right({
  filename,
  isVideo,
  children,
  left,
  stacked,
}: {
  filename?: string;
  isVideo?: boolean;
  left?: boolean;
  stacked: boolean;
  children: React.ReactNode;
}) {
  return !stacked ? (
    <div className="container">
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
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          {left ? (
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
            width: "60%",
          }}
        >
          {!left ? (
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
    <Stacked filename={filename} isVideo={isVideo} left={left}>
      {children}
    </Stacked>
  );
}
