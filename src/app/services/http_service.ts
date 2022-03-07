import { environment } from '../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TrackViewModel } from '../models/music_track.model';


@Injectable()
export class HttpService
{

  private _musicTrackCache: TrackViewModel[] = [];

  public get musicTrackCache()
  {
     return this._musicTrackCache;
  }

  constructor(private http: HttpClient)
  {}

  /** Get a list of tracks from the api with a filter of Genre */
  public getMusicTracks(genreParam: string = ""): Observable<TrackViewModel[]>
  {
      return this.http.get<TrackViewModel[]>(`${environment.base_url}/${genreParam}`)
  }

}

