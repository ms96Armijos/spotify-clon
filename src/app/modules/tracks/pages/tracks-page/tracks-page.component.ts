import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObserver$: Array<Subscription> = [];

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }


  /*async loadDataInFormPromise(): Promise<any>{
    this.tracksTrending = await this._trackService.getallTracks$().toPromise();
    this.tracksRandom = await this._trackService.getallTracksRandom$().toPromise();
  }*/

  loadDataAll(){
    this._trackService.getallTracks$().subscribe((response: TrackModel[]) => {
      this.tracksTrending = response;
    });
  }

  loadDataRandom(){
    this._trackService.getallTracksRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    });
  }
}
