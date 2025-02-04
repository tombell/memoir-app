import { z } from "zod";

export const artworkSchema = z.object({
  key: z.string(),
});
export type Artwork = z.infer<typeof artworkSchema>;

export const trackSchema = z.object({
  id: z.string(),
  artist: z.string(),
  name: z.string(),
  genre: z.string(),
  bpm: z.number(),
  key: z.string(),
  artistHighlighted: z.string().optional(),
  nameHighlighted: z.string().optional(),
});
export type Track = z.infer<typeof trackSchema>;

export const tracklistSchema = z.object({
  id: z.string(),
  name: z.string(),
  date: z.string(),
  artwork: z.string(),
  url: z.string(),
  trackCount: z.number(),
  tracks: z.array(trackSchema).optional(),
});
export type Tracklist = z.infer<typeof tracklistSchema>;

const name = z
  .string()
  .min(5, "Must be at least 5 characters")
  .max(256, "Must be less than, or equal to 256 characters");

const date = z.string().datetime("Must be a valid date");

const url = z.string().url("Must be a valid URL");

export const newTracklistSchema = z.object({
  name,
  date,
  url,
  artwork: z
    .string()
    .regex(/^[0-9a-f]{32}.[a-z0-9]+$/i, "Must be an uploaded artwork filename"),
  tracks: z
    .array(z.array(z.string()))
    .min(1, "Must contain at least one track"),
});
export type NewTracklist = z.infer<typeof newTracklistSchema>;

export const editTracklistSchema = z.object({
  id: z.string().uuid("Must be a UUID"),
  name,
  date,
  url,
});
export type EditTracklist = z.infer<typeof editTracklistSchema>;
