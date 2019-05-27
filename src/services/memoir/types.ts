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

export interface PagedTracklists {
  track?: Track;
  tracklists: Tracklist[] | null;
  hasMore: boolean;
}

export type FetchTracklists = (page: number) => Promise<PagedTracklists | null>;

export type FetchTracklist = (id: string) => Promise<Tracklist | null>;

export type FetchTracklistsByTrack = (
  id: string,
  page: number
) => Promise<PagedTracklists | null>;

export type FetchMostPlayedTracks = () => Promise<Track[] | null>;
