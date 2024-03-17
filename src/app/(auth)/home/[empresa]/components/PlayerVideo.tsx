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
    <div className="overflow-hidden flex w-full rounded-2xl">
      {hasWindow && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kqVjVfAjU4E"
          controls={false}
          playing={true}
          loop
          height={720}
          width={'100%'}
        />
      )}
    </div>
  )
}

export default PlayerVideo
