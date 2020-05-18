import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { LogType } from '@class/log-type.enum';
import { Logfile} from '@class/logfile';
import { LogTypeArray } from '@class/log-type.array';
import { FormGroup, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public logForm = new FormGroup({
    fileInput: new FormControl(),
    typeFileInput: new FormControl(),
  }) ;

  @Output() logFileInput = new EventEmitter<Logfile>() ;
   logTypeList = LogTypeArray  ;

  constructor() {

   }

  ngOnInit(): void {
  }

   enumLogToMapLof(): Map<string, string> {
    return;
  }

   OnSubmit(): void {
     this.logFileInput.emit(this.logTypeModel(
                                this.logForm.value.fileInput,
                                this.getNameFileFromPath(this.logForm.value.fileInput),
                                this.logForm.value.typeFileInput));
  }

  private getNameFileFromPath(pathFileInput: string): string {

     return pathFileInput;
  }

  private logTypeModel(nameInputFile: string,
                       pathInputFile: string,
                       typeLogInputFile: LogType,
                       extensionInputFile?: string): Logfile {
    return {name: nameInputFile,
            path: pathInputFile,
            typeLog: typeLogInputFile,
            extension: extensionInputFile} as Logfile ;
  }

}
