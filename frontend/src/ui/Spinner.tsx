import React, { Fragment } from "react";

interface SpinnerProps {
  color?: string;
  size?: number;
  speed?: number;
  className?: string;
}

function Spinner({
  color = "#ffffff",
  size = 48,
  speed = 1,
  className = "",
}: SpinnerProps) {
  const borderSize = Math.max(3, size * 0.1);

  const style: React.CSSProperties = {
    width: size,
    height: size,
    border: `${borderSize}px solid ${color}`,
    borderBottomColor: "transparent",
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    animation: `spin ${speed}s linear infinite`,
  };

  return (
    <Fragment>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <span style={style} className={className}></span>
    </Fragment>
  );
}

export { Spinner };
