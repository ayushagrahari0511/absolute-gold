import { Html, Head, Main, NextScript } from 'next/document'

const DocumentFont = () => {
    return (
        <Html>
            <Head>
                <title>Absolute Gold</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default DocumentFont