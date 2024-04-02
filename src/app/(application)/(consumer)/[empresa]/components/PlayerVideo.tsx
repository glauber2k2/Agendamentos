'use client'

import { FunctionComponent } from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react'

interface PlayerVideoProps {}

const PlayerVideo: FunctionComponent<PlayerVideoProps> = () => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return (
    <div
      className="max-w-screen-lg mx-auto relative"
      style={{ maxWidth: '800px', height: '400px' }}
    >
      {hasWindow && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kqVjVfAjU4E"
          controls={false}
          playing={true}
          loop
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      )}
    </div>
  )
}

export default PlayerVideo
