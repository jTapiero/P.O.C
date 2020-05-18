import { Pipe, PipeTransform } from '@angular/core';
import { OsDetectionService } from '@service/os-detection.service';

@Pipe({
  name: 'extractFileName'
})
export class NameFilePipe implements PipeTransform {

  private separator: string;
  constructor(private osDetectionService: OsDetectionService){
    this.separator = (osDetectionService.os === 'WIN') ? '\\' : '/';
  }

  transform(value: string): string {
    const stringSplited = value.split(this.separator);
    return stringSplited[stringSplited.length - 1];
  }

}
