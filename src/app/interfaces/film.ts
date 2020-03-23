export interface Film {
  poster_path: string;
  id: number | null;
  adult: boolean | null;
  backdrop_path: string | null;
  original_language: string | null;
  original_title: string;
  genre_ids: number[] | null;
  title: string | null;
  vote_average: number | null;
  overview: string;
  popularity: number | null;
  vote_count: number | null;
  release_date: string;
  video: boolean | null;
}
