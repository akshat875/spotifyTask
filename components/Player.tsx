'use client'

import { useEffect, useRef, useState } from 'react'

import { usePlayer } from '@/components/PlayerContext'
import { MoreHorizontal, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { Dropdown } from 'react-bootstrap'
import styles from './Player.module.css'

export function Player() {
  const { currentSong, isPlaying, play, pause, next, previous, toggleFavorite, favorites } = usePlayer()
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isPlaying) {
      progressRef.current = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100))
      }, 1000)
    } else {
      if (progressRef.current) {
        clearInterval(progressRef.current)
      }
    }

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current)
      }
    }
  }, [isPlaying])

  if (!currentSong) return null

  return (
    <div className={styles.player}>
      <div className={styles.mainContent}>
        <div className={styles.songInfo}>
          <div className={styles.songDetails}>
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
          </div>
        </div>
        <div className={styles.centerControls}>
          <div className={styles.controls}>
            <Dropdown>
              <Dropdown.Toggle variant="link" className={styles.menuButton}>
                <MoreHorizontal className="w-5 h-5" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => toggleFavorite(currentSong)}>
                  {favorites.some(f => f.id === currentSong.id)
                    ? 'Remove from Favorites'
                    : 'Add to Favorites'}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button onClick={previous} className={styles.controlButton}>
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              className={styles.playButton}
              onClick={isPlaying ? pause : () => play(currentSong)}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className={`w-5 h-5 ${styles.playIcon}`} />
              )}
            </button>
            <button onClick={next} className={styles.controlButton}>
              <SkipForward className="w-5 h-5" />
            </button>
            <button className={styles.volumeButton}>
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.progress}>
              <div 
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

