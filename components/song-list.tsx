'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MoreHorizontal, Heart } from 'lucide-react'
import { Dropdown } from 'react-bootstrap'
import { usePlayer } from '@/components/PlayerContext'
import { songs } from '@/data/songs'
import { SearchBar } from './search-bar'
import styles from './song-list.module.css'

interface SongListProps {
  view: 'for-you' | 'top-tracks' | 'favorites' | 'recent'
}

export function SongList({ view }: SongListProps) {
  const { currentSong, play, toggleFavorite, favorites, recentlyPlayed } = usePlayer()
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [view])

  let displaySongs = songs
  if (view === 'favorites') {
    displaySongs = favorites
  } else if (view === 'recent') {
    displaySongs = recentlyPlayed
  }

  // Filter out songs with no title or with undefined title
  const filteredSongs = displaySongs.filter(song =>
    song?.title?.toLowerCase().includes(searchTerm.toLowerCase()) // Safely check for title
  )

  if (isLoading) {
    return (
      <div className={styles.loading}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.skeleton}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonTitle} />
              <div className={styles.skeletonSubtitle} />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className={styles.songList}>
        {filteredSongs.map((song) => (
          <div
            key={song.id}
            onClick={() => play(song)}
            className={`${styles.song} ${currentSong?.id === song.id ? styles.active : ''}`}
          >
            <Image
              src={song.cover}
              alt={song.title || 'Unknown Song'} // Handle undefined title with fallback
              width={40}
              height={40}
              className={styles.cover}
            />
            <div className={styles.info}>
              <div className={styles.title}>{song.title || 'Untitled'}</div> {/* Handle undefined title */}
              <div className={styles.artist}>{song.artist}</div>
            </div>
            <div className={styles.duration}>{song.duration}</div>
            <div className={styles.actions}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(song)
                }}
                className={`${styles.favoriteButton} ${
                  favorites.some(f => f.id === song.id) ? styles.active : ''
                }`}
              >
                <Heart />
              </button>
              <Dropdown>
                <Dropdown.Toggle variant="link" className={styles.menuButton}>
                  <MoreHorizontal />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(song)
                    }}
                  >
                    {favorites.some(f => f.id === song.id)
                      ? 'Remove from Favorites'
                      : 'Add to Favorites'}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
