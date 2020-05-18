import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { LogType } from '@class/log-type.enum';
import { Logfile} from '@class/logfile.interf';
import { LogTypeArray } from '@class/log-type.array';
import { FormGroup, FormControl } from '@angular/forms';
import { LogFileReaderService } from '@service/log-file-reader.service';

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

  constructor(private logReader: LogFileReaderService ) {}

  ngOnInit(): void {
  }

  onSubmit($event): void {
    // console.log($event.target.form[0].files[0]);
    // this.logReader.readFile($event.target.form[0].files[0]);
    this.logFileInput.emit(
      { file: $event.target.form[0].files[0],
        typeLog: this.logForm.value.typeFileInput,
        path: this.logForm.value.fileInput
      } as Logfile);
  }

}
