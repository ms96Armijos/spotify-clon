import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

    callBack: EventEmitter<any> = new EventEmitter<any>();
    
  constructor() { }
}
