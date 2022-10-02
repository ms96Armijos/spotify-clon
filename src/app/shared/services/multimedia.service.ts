import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

    callBack: EventEmitter<any> = new EventEmitter<any>();
    
    //myObservable1$: Observable<any> = new Observable();
    //myObservable2$: Subject<any> = new Subject();
    myObservable3$: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { 
    /*this.myObservable1$ = new Observable(
      (observer: Observer<any>) => {
        observer.next('')
      }
    )*/

    /*this.myObservable2$.next('');
    this.myObservable2$.complete();
    this.myObservable2$.error('');*/

    this.myObservable3$.next('');
    this.myObservable3$.complete();
    this.myObservable3$.error('');
  }
}
