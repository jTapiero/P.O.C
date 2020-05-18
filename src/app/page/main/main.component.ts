import { Component, OnInit } from '@angular/core';
import { Logfile } from '@class/logfile';
import { LogFileReaderService } from '@service/log-file-reader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  logFileInput: Logfile;

  constructor(private logFileReaderService: LogFileReaderService ) {

  }

  ngOnInit(): void {
  }

  onFileInput($event: Logfile): void {
   this.logFileInput = $event;

  }

}
