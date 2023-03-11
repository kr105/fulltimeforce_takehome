import './globals.css'

export const metadata = {
    title: 'Fulltimeforce - Take home task',
    description: 'The goal of this test will be to create an app that shows git commit history on the same project you are working on.'
}

export default function RootLayout ({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}
