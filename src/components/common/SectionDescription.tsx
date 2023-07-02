import { HTMLAttributes } from "react";

export const SectionDescription = (
  props: HTMLAttributes<HTMLParagraphElement>
) => {
  return (
    <p {...props} className="text-gray-secondary/80 text-sm font-light">
      {props.children}
    </p>
  );
};
