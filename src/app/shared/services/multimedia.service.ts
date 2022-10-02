import { Injectable, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

    callBack: EventEmitter<any> = new EventEmitter<any>();
    
    public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public audio!: HTMLAudioElement;

  constructor() { 
    this.audio = new Audio();
    this.trackInfo$.subscribe(respoonseOK => {
      if(respoonseOK){
        this.setAudio(respoonseOK);
      }
    })
  }

  public setAudio(track: TrackModel): void{
    console.log(track)
    this.audio.src= track.url;
    this.audio.play();
  }
}
