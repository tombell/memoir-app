export interface Artwork {
  key: string;
}

export interface Track {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  key: string;
  artistHighlighted?: string;
  nameHighlighted?: string;
}

export interface Tracklist {
  id: string;
  name: string;
  date: Date;
  artwork: string;
  url: string;
  trackCount: number;
  tracks?: Track[];
}

export interface PagedTracks {
  tracks: Track[] | null;
  hasMore: boolean;
}

export interface PagedTracklists {
  track?: Track;
  tracklists: Tracklist[] | null;
  hasMore: boolean;
}

export interface NewTracklist {
  name: string;
  date: string;
  artwork: string;
  url: string;
  tracks: string[][];
}
