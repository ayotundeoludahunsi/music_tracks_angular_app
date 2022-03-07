
export interface TrackViewModel {
  id: number;

  title: string

  description: string

  artist: string
  /** Duration in Minutes*/
  duration: number;

  averageRating: number;

  genreId: number;

  genre: string

  dateReleased: Date;

  yearReleased: number;
  producer: string;

  createdAt: Date;

  createdBy: string;

  updatedAt: Date;

  updatedBy: string

  isActive: boolean;

}
