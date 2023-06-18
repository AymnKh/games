export interface Game {
    id:string
    background_image: string
  background_image_additional:string
    released: string
    name: string
    metacritic_url: string
    metacritic: string
    website: string
    description: string
    genres: Array<Genre>
    parent_platforms: Array<ParentPlatform>
    publishers: Array<Publisher>
    ratings: Array<Rating>
}
export interface ApiResponse<T> {
    results: Array<T>
}

interface Genre {
    name: string
}
interface ParentPlatform {
    platform: {
      slug: string
    }
}

interface Publisher {
    name: string
}

interface Rating {
    id: number
    count: number
    title: string
}

export interface ScreenshotAPiRes {
  count:    number;
  next:     null;
  previous: null;
  results:  Screenshots[];
}

export interface Screenshots {
  id:         number;
  image:      string;
  width:      number;
  height:     number;
  is_deleted: boolean;
}

export interface MoviesApiRes {
  count:    number;
  next:     null;
  previous: null;
  results:  Movies[];
}

export interface Movies {
  id:      number;
  name:    string;
  preview: string;
  data:    Data;
}

export interface Data {
  "480": string;
  max:   string;
}

