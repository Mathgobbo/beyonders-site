"use client";

import { reportConversion } from "@/services/gtag";
import { ComponentProps } from "react";
import { Button, OutlineButton } from "../common/Button";

export const ConversionButton = (props: ComponentProps<typeof Button>) => {
  // const handleClick = () => {
  //   reportConversion(CONTACT_FORM_URL);
  // };
  return (
    <a href="#elearning-contact">
      <Button {...props}>{props.children}</Button>
    </a>
  );
};

export const ConversionOutlineButton = (
  props: ComponentProps<typeof Button>
) => {
  return (
    <a href="#elearning-contact">
      <OutlineButton {...props}>{props.children}</OutlineButton>
    </a>
  );
};

export const EmailButtonOutline = (props: ComponentProps<typeof Button>) => {
  const handleClick = () => {
    const link =
      "mailto://matheus@beyonders.com.br?subject=Free Custom Quote - E-learning Platform&body=";
    reportConversion(link);
  };
  return (
    <OutlineButton {...props} onClick={handleClick}>
      {props.children}
    </OutlineButton>
  );
};
