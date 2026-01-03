const TMDB_API_KEY = '44b0b3bb235ef9bca7832fa151e1e184';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

export interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

export async function searchMoviePoster(movieName: string, year?: number): Promise<string | null> {
  try {
    const query = encodeURIComponent(movieName);
    const yearParam = year ? `&year=${year}` : '';
    
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}${yearParam}`
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const movie = data.results?.[0] as TMDBMovie | undefined;
    
    if (movie?.poster_path) {
      return `${TMDB_IMAGE_BASE}/w500${movie.poster_path}`;
    }
    
    return null;
  } catch (error) {
    console.error('TMDB fetch error:', error);
    return null;
  }
}

export function getPosterUrl(path: string | null, size: 'w200' | 'w300' | 'w500' | 'original' = 'w500'): string | null {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}
