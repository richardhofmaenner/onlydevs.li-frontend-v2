import React from 'react'
import PropTypes from 'prop-types'
import Stream from '@/components/Stream'
import { Stream as StreamTyping } from '../typings/Stream'

function StreamList({ streams }: { streams: StreamTyping[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {streams.map((stream:StreamTyping) => <Stream key={stream.id} stream={stream} />)}
    </div>
  )
}

StreamList.propTypes = {
  streams: PropTypes.array.isRequired,
}

export default StreamList
