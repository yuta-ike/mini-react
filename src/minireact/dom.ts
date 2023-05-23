import { MiniReactNode } from "./type";

export const buildDomTree = (component: MiniReactNode) => {
  const root = buildDomNode(component);
  return root;
};

const buildDomNode = (component: MiniReactNode) => {
  const { type, props = {}, children = [] } = component;

  const newElm = document.createElement(type);

  // Childの追加
  const childNodes = children.map((child) => {
    if (typeof child === "string") {
      return child;
    } else {
      return buildDomNode(child);
    }
  });

  childNodes.forEach((childNode) => newElm.append(childNode));

  // propsの追加
  for (const key in props) {
    // @ts-ignore
    newElm[key] = props[key];
  }

  return newElm;
};
