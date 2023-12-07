import './globals.css'

import PropTypes from 'prop-types'

import { Providers } from '@/components'

export const metadata = {
  title: 'Tumbas',
  description: 'Tumbas by Us',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.isRequired,
}
