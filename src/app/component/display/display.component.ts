import { Component, OnInit } from '@angular/core';
import { LogFileReaderService } from '@service/log-file-reader.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  message: string;

  constructor(private logFileReaderService: LogFileReaderService) {
    this.logFileReaderService.getJsonData().subscribe(data => this.message = data);
   }

  ngOnInit(): void {
  }

}
