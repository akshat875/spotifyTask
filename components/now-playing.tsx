'use client'

import Image from 'next/image'
import { usePlayer } from '@/components/PlayerContext'
import styles from './now-playing.module.css'

export function NowPlaying() {
  const { currentSong } = usePlayer()

  if (!currentSong) return null

  return (
    <div className={styles.nowPlaying}>
      <div className={styles.albumArt}>
        <Image
          src={currentSong.albumArt}
          alt={currentSong.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className={styles.info}>
        <h1>{currentSong.title}</h1>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  )
}

