import PropTypes from 'prop-types'

export const metadata = {
  title: 'LenSights - AI-Driven Credit Risk & Insurance Management',
  description: 'AI-Driven Credit Risk & Insurance Management',
}

export default function RootLayout({ children }) {
  return (
    <div lang="en">
      <div className="h-full w-full">{children}</div>
    </div>
  )
}

RootLayout.propTypes = {
  children: PropTypes.isRequired,
}
