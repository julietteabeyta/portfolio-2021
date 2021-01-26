import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head />
                <meta name="description" content="What Rhymes With God is a small collage studio offering purchasable art and wearable merchandise."/>
                <link rel="icon"
                    type="image/png"
                    href="hands.png"></link>
                <body>
                    <Main />
                    <NextScript />
                    <script> </script>
                </body>
            </Html>
        )
    }
}