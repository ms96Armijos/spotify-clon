import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {


  mockCover!: TrackModel;


  listObservers$: Array<Subscription> = [];

  constructor(public _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    
    
    
  }

  ngOnDestroy(): void {
    console.log('unsubscribed')
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
