import { Component, OnInit } from '@angular/core';
import { Logfile } from '@class/logfile.interf';
import { LogFileReaderService } from '@service/log-file-reader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  logFileInput: Logfile;

  constructor(private logReader: LogFileReaderService ) {}

  ngOnInit(): void {
  }

  onFileInput($event: Logfile): void {
   this.logFileInput = $event;
   this.logReader.readFile($event.file);

  }

}
