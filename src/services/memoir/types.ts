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

export type FetchTracklists = () => Promise<Tracklist[] | null>;

export type FetchTracklist = (id: string) => Promise<Tracklist | null>;

export type FetchTracklistsByTrack = (id: string) => Promise<Tracklist[] | null>;
