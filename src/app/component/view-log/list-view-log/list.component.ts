import { Component, OnInit, Input, OnChanges, SimpleChanges, Output , EventEmitter } from '@angular/core';
import { RadarPosition } from '@class/radar-position.class';

@Component({
  selector: 'app-list-log-view',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit ,OnChanges {

  @Input() dataList = new Array<RadarPosition>() ;
  @Output() SelectedLog = new EventEmitter<RadarPosition>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataList);
  }

  ngOnInit(): void {
  }

  onSelect($event, log: RadarPosition): void {
    this.SelectedLog.emit(log);
  }

}
