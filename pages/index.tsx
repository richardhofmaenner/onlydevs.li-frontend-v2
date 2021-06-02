import React from 'react'
import WideLayout from '@/layouts/WideLayout'
import StreamList from '@/components/StreamList'
import PropTypes from 'prop-types'

export default function Home({ streams }) {
  return (
    <WideLayout title="Choose your stream">
      <h1 className="text-center">Onlydevs.li</h1>
      <p className="text-gray-200 text-center text-sm">
        Find your favorite Programming Livestream on twitch
      </p>
      <div className="mt-8">
        <StreamList streams={streams} />
      </div>
    </WideLayout>
  )
}

Home.propTypes = {
  streams: PropTypes.array.isRequired,
}

export async function getServerSideProps() {
  const resStreams = await fetch('https://api.onlydevs.li/v1/streams/all')
  const jsonStream = await resStreams.json()
  return {
    props: {
      streams: jsonStream.data,
    },
  }
}
