import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogFileReaderService } from '@service/log-file-reader.service';
import { FormControl } from '@angular/forms';
import { Logfile } from '@class/logfile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() fileInput = new EventEmitter<Logfile>();

  public nameLog: string;
  public logField = new FormControl();



  constructor( private logFileReaderService: LogFileReaderService ) {
    this.setCurrentNameLog('something long enough');
   }

  ngOnInit(): void {
  }

  onNewInputFile($event: Logfile): void {
    this.fileInput.emit($event);
  }

  private setCurrentNameLog(name: string): void {
    this.nameLog = name;
  }



}
