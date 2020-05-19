import { Injectable } from '@angular/core';
import { Logfile } from '@class/logfile.interf';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogFileReaderService {

  responseDataText = new Subject();
  private fileReader = new FileReader();
  private fileResult: any;

  constructor() {
    this.handleReadFile();
  }

  getJsonDataRequest(fileInput: Logfile): void {
    this.fileReader.readAsText(fileInput.file);
  }

  private handleReadFile(): void {
    this.fileReader.onloadend = ( e ) => {
      this.fileResult = this.fileReader.result ;
      this.fileResult = JSON.parse(this.fileResult);
      this.responseDataText.next(this.fileResult);
    };
  }

}

