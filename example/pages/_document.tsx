import { Html, Head, Main, NextScript } from "next/document";
import ReactPreviewComments, { getCssText } from "react-preview-comments";

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <ReactPreviewComments />
      </body>
    </Html>
  );
}
