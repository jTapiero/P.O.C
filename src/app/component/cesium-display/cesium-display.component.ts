import { Component, OnInit, Input } from '@angular/core';
import { RadarPosition } from '@class/radar-position.class';
// import { CameraService } from 'angular-cesium';

@Component({
  selector: 'app-display',
  templateUrl: './cesium-display.component.html',
  styleUrls: ['./cesium-display.component.css']
})

export class DisplayComponent implements OnInit {

  @Input() listEntities: RadarPosition;
  cameraScene: any;

  constructor() {
   }

  //  constructor(private cameraService: CameraService) {
  // }

  ngOnInit(): void {
    // this.cameraScene = this.cameraService.getCamera();
    // this.cameraScene.setView({
    //   destination:  new Cesium.Cartesian3(34.337769, 32.287133, 0),
    //     orientation: {
    //         heading : 0.0,
    //         pitch : -Cesium.Math.PI_OVER_TWO,
    //         roll : 0.0
    //     }
    // });
  }

}
