import PropTypes from 'prop-types'

export const metadata = {
  title: 'Tumbas',
  description: 'Tumbas by us',
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
