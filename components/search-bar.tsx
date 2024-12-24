'use client'

import { Search } from 'lucide-react'
import { Form } from 'react-bootstrap'
import styles from './Search-bar.module.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <Search className={styles.icon} />
      <Form.Control
        type="search"
        placeholder="Search Song, Artist"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

