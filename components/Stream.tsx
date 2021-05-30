import React from 'react'
import PropTypes from 'prop-types'
import { Stream as StreamTyping } from '../typings/Stream'

function Stream({ stream }: { stream: StreamTyping }) {
  let thumbUrl = stream.thumbnail_url.replace('{width}', '480')
  thumbUrl = thumbUrl.replace('{height}', '270')
  return (
    <div className="border border-white rounded relative overflow-hidden">
      <a href={`https://twitch.tv/${stream.user_login}`} target="_blank" className="absolute top-0 left-0 w-full h-full" rel="noreferrer">
        &nbsp;
      </a>
      <img src={thumbUrl} alt="" />
      <div className="px-2 pb-2">
        <h2>{stream.title}</h2>
        <p className="text-sm">{stream.user_name} is streaming in front of {stream.viewer_count} viewers</p>
      </div>
    </div>
  )
}

Stream.propTypes = {
  stream: PropTypes.object.isRequired,
}

export default Stream
