'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import styles from './sidebar.module.css'

interface SidebarProps {
  currentView: string
  onViewChange: (view: 'for-you' | 'top-tracks' | 'favorites' | 'recent') => void
  onClose: () => void
}

export function Sidebar({ currentView, onViewChange, onClose }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      <button className={styles.closeButton} onClick={onClose}>
        <X />
      </button>
      <div className={styles.logo}>
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Spotify"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>Spotify</span>
      </div>
      <nav className={styles.nav}>
        <button
          onClick={() => onViewChange('for-you')}
          className={currentView === 'for-you' ? styles.active : ''}
        >
          For You
        </button>
        <button
          onClick={() => onViewChange('top-tracks')}
          className={currentView === 'top-tracks' ? styles.active : ''}
        >
          Top Tracks
        </button>
        <button
          onClick={() => onViewChange('favorites')}
          className={currentView === 'favorites' ? styles.active : ''}
        >
          Favourites
        </button>
        <button
          onClick={() => onViewChange('recent')}
          className={currentView === 'recent' ? styles.active : ''}
        >
          Recently Played
        </button>
      </nav>
    </div>
  )
}

