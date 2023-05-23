import { buildDomTree } from "./dom";
import { addRerenderListener, resetCounter } from "./hook";
import { Component } from "./type";

export const mount = (elm: HTMLElement, component: Component) => {
  const _mount = () => {
    resetCounter();
    const domTree = buildDomTree(component());
    elm.childNodes.forEach((childNode) => childNode.remove());
    elm.appendChild(domTree);
  };

  addRerenderListener(_mount);

  _mount();
};
