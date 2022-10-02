import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listResult$: Observable<any> = of([]);
  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  recievedData(event: string): void{
    console.log('estoy en el padre')
    this.listResult$ = this._searchService.searchTracks$(event)
    .pipe(
      map((dataRaw) => dataRaw.data)
    )
  }
}
