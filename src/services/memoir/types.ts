export interface Track {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  key: string;
}

export interface Tracklist {
  id: string;
  name: string;
  date: string;
  trackCount: number;
  tracks?: Track[];
}
