import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private _httpClient: HttpClient) { 
    
  }

  private skipById(lisTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject)=>{
      const listTmp = lisTracks.filter(a => a._id === id);
      resolve(listTmp);
    })
  } 


  getallTracks$(): Observable<any>{
    return this._httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any)=>{
        return data;
      })
    );
  }


  getallTracksRandom$(): Observable<any>{
    return this._httpClient.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({data}: any)=> this.skipById(data, 2)),
      tap(data => console.log('🎉🎉🎉', data)),
      catchError((err) => {
        const { status, statusText} = err;
        console.log('Hay un error, revisa el servicio de Tracks', [status, statusText])
        return of([])
      })
    );
  }
}

//windows + . (punto 👍)