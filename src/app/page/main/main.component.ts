import { Component, OnInit, SimpleChanges} from '@angular/core';
import { Logfile } from '@class/logfile.interf';
import { RadarPosition } from '@class/radar-position.class';
import { LogFileReaderService } from '@service/log-file-reader.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  logFileInput: Logfile;
  dataLog = new Array<RadarPosition>() ;

  constructor(private logReader: LogFileReaderService ) {
    this.logReader.responseDataText.subscribe( (data: RadarPosition[]) => {
      this.dataLog = data;
    });

  }

  ngOnInit(): void {
  }

  onFileInput($event: Logfile): void {
    this.logFileInput = $event  ;
    this.logReader.getJsonDataRequest($event);
  }

  // private sortData(rawArray: RadarPosition[]): RadarPosition[] {
  //   return rawArray.sort(( a , b) => {
  //     a.timestamp. - b.timestamp;
  //    });
  // }
}
