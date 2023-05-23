export type Component<
  Props extends Record<string, unknown> = Record<string, unknown>
> = (props?: Props) => MiniReactNode;

export type MiniReactNode = {
  type: "p" | "h1" | "div" | "button" | "section";
  props?: Record<string, unknown>;
  children?: (MiniReactNode | string)[];
};
