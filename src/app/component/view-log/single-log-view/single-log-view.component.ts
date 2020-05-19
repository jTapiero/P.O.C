import { Component, OnInit, Input, OnChanges , SimpleChanges} from '@angular/core';
import { RadarPosition } from '@class/radar-position.class';

@Component({
  selector: 'app-single-log-view',
  templateUrl: './single-log-view.component.html',
  styleUrls: ['./single-log-view.component.css']
})
export class SingleLogViewComponent implements OnInit,OnChanges{

  @Input() singleLog: RadarPosition;

  constructor() {
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.singleLog);
  }

  ngOnInit(): void {
  }

}
