'use client'

import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Menu } from 'lucide-react'
import { Sidebar } from '@/components/Sidebar'
import { Player } from '@/components/Player'
import { SongList } from '@/components/song-list'
import { NowPlaying } from '@/components/now-playing'
import { usePlayer } from '@/components/PlayerContext'
import styles from './page.module.css'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [view, setView] = useState<'for-you' | 'top-tracks' | 'favorites' | 'recent'>('for-you')
  const { currentSong } = usePlayer()

  return (
    <main 
      className={styles.main}
      style={{
        background: `linear-gradient(to bottom, ${currentSong?.color || '#1a2c38'}, #121212)`
      }}
    >
      <Container fluid className={styles.container}>
        <Row className="h-100">
          <Col 
            md={3} 
            className={`${styles.sidebar} ${showSidebar ? styles.show : ''}`}
          >
            <Sidebar currentView={view} onViewChange={setView} onClose={() => setShowSidebar(false)} />
          </Col>
          <Col md={6} className={styles.content}>
            <button 
              className={styles.menuButton}
              onClick={() => setShowSidebar(true)}
            >
              <Menu />
            </button>
            <SongList view={view} />
          </Col>
          <Col md={3} className={styles.nowPlaying}>
            <NowPlaying />
          </Col>
        </Row>
      </Container>
      <Player />
    </main>
  )
}

