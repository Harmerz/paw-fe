import './globals.css'

export const metadata = {
  title: 'Tumbas',
  description: 'Tumbas by us',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
