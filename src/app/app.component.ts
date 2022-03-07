import { Component, OnInit } from '@angular/core';
import { TrackViewModel } from './models/music_track.model';
import { HttpService } from './services/http_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'music track client';
  public searchTerm : any = { name: '' };
  public musicTracks: TrackViewModel[] = [];

  public constructor(private httpService: HttpService)
  {}

  ngOnInit(): void {

    this.httpService.getMusicTracks().subscribe(response=>
        {
           this.musicTracks = response;

           //copy the array to cache
           this.httpService.musicTrackCache.push(...response)
        })

  }

  /** Perform filter on the tracks list cache */
  public runFilter()
  {
     if(this.searchTerm && this.searchTerm.name)
     {
      this.musicTracks = this.httpService.musicTrackCache.filter(e=> {
         return e.genre.toLowerCase() == this.searchTerm?.name?.toLowerCase();
      })
     }
     else
     {
       //copy the array from cache
      this.musicTracks = [...this.httpService.musicTrackCache];
     }
  }

}
