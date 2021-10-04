import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head />
                <meta name="description" content="Juliette Spencer is a full-stack developer living their best life in Los Angeles."/>
                <link rel="icon"
                    type="image/jpg"
                    href="juliette.jpg"></link>
                <body>
                    <Main />
                    <NextScript />
                    <script> </script>
                </body>
            </Html>
        )
    }
}