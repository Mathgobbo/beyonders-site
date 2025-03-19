export const reportConversion = (url?: string) => {
  const callback = function () {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };
  // @ts-ignore
  window.gtag("event", "conversion", {
    send_to: "AW-16877219122/sLanCPaR7KwaELLa1-8-",
    value: 1.0,
    currency: "BRL",
    event_callback: callback,
  });
};
