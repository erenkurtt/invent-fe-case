export interface SearchItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface SearchResponse {
    Search: SearchItem[];
    totalResults: string;
    Response: string;
}

export interface Rating {
    Source: string;
    Value: string;
}

export interface ItemDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    totalSeasons: string;
}

export interface Episode {
    Title: string;
    Released: string;
    Episode: string;
    imdbRating: string;
    imdbID: string;
  }
  
  export interface SeasonDetails {
    Title: string;
    Season: string;
    totalSeasons: string;
    Episodes: Episode[];
    Response: string;
  }