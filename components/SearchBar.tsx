'use client'

import { useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  const [search, setSearch] = useState('')

  return (
    <Form className={styles.searchBar}>
      <Form.Control
        type="text"
        placeholder="Search Song, Artist"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
      />
    </Form>
  )
}

