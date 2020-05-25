import { Component, OnInit, Input } from '@angular/core';
import { RadarPosition } from '@class/radar-position.class';



@Component({
  selector: 'app-position-log',
  templateUrl: './position-log.component.html',
  styleUrls: ['./position-log.component.css']
})
export class PositionLogComponent implements OnInit {

  @Input() listEntities: RadarPosition;

  showTracks  = true;
  color = Cesium.Color.WHITE;

  constructor() {
  }

  ngOnInit(): void {
  }

  getImage(): string {
    return '../../../assets/picture/map-marker-icon.png';
  }

  getPosition(entity: RadarPosition): any  {
    return new Cesium.Cartesian3(entity.latitude, entity.latitude, 0 );
  }

}
