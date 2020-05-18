import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsDetectionService {

  public static _os: string;

  get os(): string {
    return OsDetectionService._os;
  }

  set os(newOs: string){
    OsDetectionService._os = newOs ;
  }

  constructor() {
    if (navigator.appVersion.indexOf('Win') !== -1 ) {
      this.os = 'WIN';
    } else {
      this.os = 'LIN';
    }
   }

}
