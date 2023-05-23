import { useState } from "@minireact/hook";
import { mount } from "@minireact/mount";
import { Component } from "@minireact/type";

export const CounterComponent: Component = () => {
  const [state, setState] = useState(0);
  return {
    type: "div",
    children: [
      {
        type: "p",
        children: [`${state}`],
      },
      {
        type: "button",
        children: ["click me!"],
        props: {
          onclick: () => setState(state + 1),
        },
      },
    ],
  };
};

export const RootComponent: Component = () => {
  return {
    type: "section",
    children: [
      {
        type: "h1",
        children: ["Counter!!"],
      },
      CounterComponent(),
    ],
  };
};

mount(document.querySelector<HTMLElement>("#app")!, RootComponent);
