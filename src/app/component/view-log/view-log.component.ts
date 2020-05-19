import { Component, OnInit, Input } from '@angular/core';
import { RadarPosition } from '@class/radar-position.class';

@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})
export class ViewLogComponent implements OnInit {

  @Input() dataResult = new Array<RadarPosition>() ;

  selectedLog: RadarPosition;

  constructor() { }

  ngOnInit(): void {
  }

  displayselectedLog($event: RadarPosition): void {
    this.selectedLog = $event;

  }

}
