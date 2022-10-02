import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() callBackData: EventEmitter<any> = new EventEmitter();
  src: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  callSearch(termino: string): void{
    if(termino.length>=3){
      this.callBackData.emit(termino)
      console.log('llamando el api')
    }
  }
}
