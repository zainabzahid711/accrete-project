// src/@types/react-type-animation.d.ts
declare module "react-type-animation" {
  import { FC, HTMLProps } from "react";

  export interface TypeAnimationProps extends HTMLProps<HTMLSpanElement> {
    sequence: Array<string | number>;
    speed?: number;
    wrapper?: string;
    repeat?: number;
  }

  const TypeAnimation: FC<TypeAnimationProps>;
  export default TypeAnimation;
}
