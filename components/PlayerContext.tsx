'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { songs, type Song } from '@/data/songs'

interface PlayerContextType {
  currentSong: Song | null
  isPlaying: boolean
  play: (song: Song) => void
  pause: () => void
  next: () => void
  previous: () => void
  toggleFavorite: (song: Song) => void
  favorites: Song[]
  recentlyPlayed: Song[]
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [favorites, setFavorites] = useState<Song[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('favorites')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('recentlyPlayed')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })
  const [audio] = useState(new Audio())

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    sessionStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed))
  }, [recentlyPlayed])

  useEffect(() => {
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [audio])

  const play = (song: Song) => {
    if (currentSong?.id !== song.id) {
      audio.src = song.audio
      audio.load()
    }
    audio.play()
    setCurrentSong(song)
    setIsPlaying(true)
    setRecentlyPlayed(prev => {
      const filtered = prev.filter(s => s.id !== song.id)
      return [song, ...filtered].slice(0, 10)
    })
  }

  const pause = () => {
    audio.pause()
    setIsPlaying(false)
  }

  const next = () => {
    if (currentSong) {
      const currentIndex = songs.findIndex(s => s.id === currentSong.id)
      const nextSong = songs[(currentIndex + 1) % songs.length]
      play(nextSong)
    }
  }

  const previous = () => {
    if (currentSong) {
      const currentIndex = songs.findIndex(s => s.id === currentSong.id)
      const previousSong = songs[(currentIndex - 1 + songs.length) % songs.length]
      play(previousSong)
    }
  }

  const toggleFavorite = (song: Song) => {
    setFavorites(prev => 
      prev.some(s => s.id === song.id)
        ? prev.filter(s => s.id !== song.id)
        : [...prev, song]
    )
  }

  return (
    <PlayerContext.Provider 
      value={{ 
        currentSong, 
        isPlaying, 
        play, 
        pause, 
        next, 
        previous,
        toggleFavorite,
        favorites,
        recentlyPlayed
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}

