import React from "react";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  tooltipText: string;
  orientation: string;
};

function Tooltip({ children, tooltipText, orientation }: Props) {
  const orientations = {
    right: "right",
    top: "top",
    left: "left",
    bottom: "bottom",
  };
  const setContainerPosition = (orientation: string) => {
    let classnames;

    switch (orientation) {
      case orientations.right:
        classnames = "top-0 left-full ml-4";
        break;
      case orientations.left:
        classnames = "top-0 right-full mr-4";
        break;
      case orientations.top:
        classnames = "bottom-full left-[50%] translate-x-[-50%] -translate-y-2";
        break;
      case orientations.bottom:
        classnames = "top-full left-[50%] translate-x-[-50%] translate-y-2";
        break;

      default:
        break;
    }

    return classnames;
  };
  const setPointerPosition = (orientation: string) => {
    let classnames;

    switch (orientation) {
      case orientations.right:
        classnames = "left-[-6px]";
        break;
      case orientations.left:
        classnames = "right-[-6px]";
        break;
      case orientations.top:
        classnames = "top-full left-[50%] translate-x-[-50%] -translate-y-2";
        break;
      case orientations.bottom:
        classnames = "bottom-full left-[50%] translate-x-[-50%] translate-y-2";
        break;

      default:
        break;
    }

    return classnames;
  };

  const tipRef = React.createRef<HTMLDivElement>();
  function handleMouseEnter() {
    if (tipRef.current) {
      tipRef.current.style.opacity = "1";
    }
  }
  function handleMouseLeave() {
    if (tipRef.current) {
      tipRef.current.style.opacity = "0";
    }
  }
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-max absolute z-10 ${setContainerPosition(
          orientation
        )} bg-gray-600 text-white text-sm px-2 py-1 rounded flex items-center transition-all duration-150 pointer-events-none`}
        style={{ opacity: 0 }}
        ref={tipRef}
      >
        <div
          className={`bg-gray-600 h-3 w-3 absolute z-10 ${setPointerPosition(
            orientation
          )} rotate-45 pointer-events-none`}
        />
        {tooltipText}
      </div>
      {children}
    </div>
  );
}

export default Tooltip;
