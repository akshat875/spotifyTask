'use client'

import Image from 'next/image'
import type { Song } from '@/data/songs'

interface AlbumArtProps {
  song: Song | null
}

export function AlbumArt({ song }: AlbumArtProps) {
  if (!song) return null

  return (
    <div className="w-full aspect-square relative">
      <Image
        src={song.albumArt || song.cover ||"https://t4.ftcdn.net/jpg/09/60/92/23/360_F_960922306_rHPbe2ACmcao7Z2KiGXNoDVMuVlPddSO.jpg"}
        alt={song.title}
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
      <div className="absolute bottom-4 left-4">
        <h2 className="text-2xl font-bold">{song.title}</h2>
        <p className="text-white/70">{song.artist}</p>
      </div>
    </div>
  )
}

