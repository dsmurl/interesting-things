import type { Component, JSXElement } from "solid-js";

type Props = {
  children: JSXElement;
  rounded?: boolean;
  flat?: boolean;
  class?: string;
};

export const Card: Component<Props> = (props: Props) => {
  return (
    <div
      id="modal"
      class={`bg-white p-4 text-center ${props.class}`}
      classList={{
        // Example: classList
        "rounded-md": props.rounded,
        "shadow-md": !props.flat,
      }}
    >
      {props.children}
    </div>
  );
};
