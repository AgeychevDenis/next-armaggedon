import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
   render(): any {
      return (
         <Html>
            <Head>
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
               />
               <title>Armaggedon-v2</title>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
