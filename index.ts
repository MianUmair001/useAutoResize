import React from "react";
import { useState } from "react";

const useAutoResize = (ContainerElement: HTMLElement) => {
  const margin = 10;
  const [width, setWidth] = useState(0);

  const ratio = ratioFun();
  const [height, setHeight] = useState(0);

  function resizer(width: number) {
    // const ContainerElement = document.getElementById("visitorGrid");
    for (
      let counter = 0;
      counter < ContainerElement?.children.length;
      counter += 1
    ) {
      const element = ContainerElement?.children[counter];
      // @ts-ignore
      element.style.margin = `${margin}px`;
      // calculate dimensions
      // @ts-ignore
      element.style.width = `${width}px`;
      // @ts-ignore
      element.style.height = `${width * ratio}px`;
      // to show the aspect ratio in demo (optional)
      element.setAttribute("data-aspect", "16:9");
    }
  }
  function dimensions() {
    if (ContainerElement) {
      setWidth(ContainerElement.offsetWidth - margin * 2);
      setHeight(ContainerElement.offsetHeight - margin * 2);
    }
  }
  function resize() {
    // get dimensions of ContainerElement
    dimensions();

    // loop (i recommend you optimize this)
    let max = 0;
    let i = 1;
    while (i < 5000) {
      const area = areaFun(i);
      if (area === false) {
        max = i - 1;
        break;
      }
      i += 1;
    }

    // remove margins
    max -= margin * 2;

    // set dimensions to all cameras
    resizer(max);
  }
  // split aspect ratio (format n:n)
  function ratioFun() {
    const ratio = "16:9".split(":");
    // @ts-ignore
    return ratio[1] / ratio[0];
  }

  // calculate area of ContainerElement:
  function areaFun(increment: number) {
    let i = 0;
    let w = 0;
    let h = increment * ratio + margin * 2;
    while (i < ContainerElement?.children.length) {
      if (w + increment > width) {
        w = 0;
        h = h + increment * ratio + margin * 2;
      }
      w = w + increment + margin * 2;
      i += 1;
    }
    if (h > height || increment > width) return false;
    return increment;
  }
  return resize;
};

export default useAutoResize;
