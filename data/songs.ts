export interface Song {
  id: string
  title: string
  artist: string
  duration: string
  cover: string
  albumArt: string
  audio: string
  color: string
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Starboy',
    artist: 'The Weeknd',
    duration: '4:16',
    cover: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Updated audio link
    color: '#1e3264'
  },
  {
    id: '2',
    title: 'Demons',
    artist: 'Imagine Dragons',
    duration: '5:24',
    cover: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Updated audio link
    color: '#2d4356'
  },
  {
    id: '3',
    title: 'Mouth of the river',
    artist: 'Imagine Dragons',
    duration: '6:23',
    cover: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Updated audio link
    color: '#1a2c38'
  },
  {
    id: '4',
    title: 'Ghost Stories',
    artist: 'Coldplay',
    duration: '3:10',
    cover: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', // Updated audio link
    color: '#1a2c38'
  },
  {
    id: '5',
    title: 'Sparks',
    artist: 'Coldplay',
    duration: '4:23',
    cover: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', // Updated audio link
    color: '#2d4356'
  },
  {
    id: '6',
    title: 'Viva La Vida',
    artist: 'Coldplay',
    duration: '5:32',
    cover: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', // Updated audio link
    color: '#1e3264'
  },
  {
    id: '7',
    title: 'Hymn for the weekend',
    artist: 'Coldplay',
    duration: '2:23',
    cover: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', // Updated audio link
    color: '#2d4356'
  },
  {
    id: '8',
    title: 'Pain',
    artist: 'Ryan Jones',
    duration: '3:12',
    cover: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02d9cc24c0d415e40d5af3c8d5', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', // Updated audio link
    color: '#1a2c38'
  },
  {
    id: '9',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: '5:55',
    cover: 'https://images.unsplash.com/photo-1579159278991-f698b0667a16?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e0205b451501d5c7f2122837d9', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', // Updated audio link
    color: '#1e3264'
  },
  {
    id: '10',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    cover: 'https://images.unsplash.com/photo-1579159278991-f698b0667a16?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated cover
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02d4f40b89be8a9a12d1fae1d4', // Updated album art
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', // Updated audio link
    color: '#2d4356'
  }
]
