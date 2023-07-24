import AppProviders from "../src/components/app/AppProviders";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="%PUBLIC_URL%/appIcon.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta
                name="description"
                content="Web site for looking for real estates"
            />
            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
            <title>Realtor</title>
        </head>
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <AppProviders>
            {children}
        </AppProviders>
        </body>
        </html>
    )
}

