import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObserver$: Array<Subscription> = [];

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    const observer1 = this._trackService.dataTracksTrending$.subscribe((response)=>{
      this.tracksTrending = response
      this.tracksRandom = response
    });

    const observer2 = this._trackService.dataTracksRandom$.subscribe((response)=>{
      this.tracksRandom = [...this.tracksRandom,  ...response]
    });

    this.listObserver$ = [observer1, observer2];
  }

  ngOnDestroy(){
    this.listObserver$.forEach(u => u.unsubscribe);
  }
}
