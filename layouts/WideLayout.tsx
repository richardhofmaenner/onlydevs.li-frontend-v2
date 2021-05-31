import PropTypes from 'prop-types'
import Head from 'next/head'

const React = require('react')

function WideLayout({ title, description, children }: { title: string, description: string, children: any }) {
  return (
    <div className="text-white">
      <Head>
        <title>{title} | Onlydevs.li</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <script data-goatcounter="https://terillos.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
      </Head>
      <main className="mt-16">
        <div className="mx-auto w-10/12 sm:w-4/5 lg:w-2/3">
          {children}
        </div>
      </main>
    </div>
  )
}

WideLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
}

WideLayout.defaultProps = {
  description: 'Find your hidden Development stream here.',
}

export default WideLayout
