import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  public dataTracksTrending$: Observable<TrackModel[]> = of([]);
  public dataTracksRandom$: Observable<TrackModel[]> = of([]);

  

  constructor() { 
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);

    this.dataTracksRandom$ = new Observable((observable) => {

      const trackExample: TrackModel = {
        _id: 9,
        name: 'leve',
        album: 'Santa',
        url: 'http://',
        cover: 'https://img.freepik.com/foto-gratis/santa-claus-bolsa-mostrando-pulgar-arriba_7502-5186.jpg?w=2000',
      }

      setTimeout(()=>{
        observable.next([trackExample]);
      }, 3500);
    })
  }
}
