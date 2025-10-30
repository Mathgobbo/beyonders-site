import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* Vbout script tag */}
        <Script
          id="vbout-tag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: ` 
            /* embed code starts */
            var _vbset = _vbset || [];
            _vbset.push(['_account', 'VBT-05131-15326']);
            _vbset.push(['_domain', 'https://beyonders.agency']);

            (function() {
              var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true; 
              vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
            })();
            /* embed code ends */ 
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
