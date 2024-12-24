'use client'

import { useState } from 'react'
import { usePlayer } from '../components/PlayerContext'
import { MoreHorizontal, Heart } from 'lucide-react'
import styles from './SongList.module.css'
import { songs } from '../data/songs'

export default function SongList() {
  const { play, currentSong, toggleFavorite, favorites } = usePlayer()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.songList}>
      {filteredSongs.map(song => (
        <div 
          key={song.id} 
          className={`${styles.song} ${currentSong?.id === song.id ? styles.active : ''}`}
          onClick={() => play(song)}
        >
          <img src={song.cover} alt={song.title} className={styles.cover} />
          <div className={styles.info}>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <span className={styles.duration}>{song.duration}</span>
          <button 
            className={styles.favorite}
            onClick={(e) => {
              e.stopPropagation()
              toggleFavorite(song)
            }}
          >
            <Heart 
              className={favorites.some(f => f.id === song.id) ? styles.active : ''} 
            />
          </button>
          <button className={styles.more}>
            <MoreHorizontal />
          </button>
        </div>
      ))}
    </div>
  )
}

