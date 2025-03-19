"use client";

import { ComponentProps } from "react";
import { Button, OutlineButton } from "../common/Button";
import { PIPEFY_FORM_URL } from "@/config/constants";
import { reportConversion } from "@/services/gtag";

export const ConversionButton = (props: ComponentProps<typeof Button>) => {
  const handleClick = () => {
    reportConversion(PIPEFY_FORM_URL);
  };
  return (
    <Button {...props} onClick={handleClick}>
      {props.children}
    </Button>
  );
};

export const ConversionOutlineButton = (
  props: ComponentProps<typeof Button>
) => {
  const handleClick = () => {
    reportConversion(PIPEFY_FORM_URL);
  };
  return (
    <OutlineButton {...props} onClick={handleClick}>
      {props.children}
    </OutlineButton>
  );
};
