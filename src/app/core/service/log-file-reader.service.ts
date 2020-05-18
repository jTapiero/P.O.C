import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogFileReaderService {
  public file: File;
  private fileReader = new FileReader();
  private fileResult: any;

  constructor(private http: HttpClient) {
    console.log('handleReadFile');
    this.handleReadFile();

  }

  getJsonData(): any {

  }

  readFile(file: File): string {
    this.fileReader.readAsText(file);
    setTimeout(() =>{ console.log( JSON.parse(this.fileResult)); }, 5000);
    return this.fileResult ;
  }

  private handleReadFile(): void {
    this.fileReader.onloadend = ( e ) => {
      this.fileResult = this.fileReader.result ;
  };
}

  private getFileName(PathFile: string): string{
    return ;
  }

  private getFileExtension(PathFile: string): string{
    return ;
  }

  private parseFileToJson(): string{
    return '';
  }

  private isJsonFile(nameFile: string): boolean{
    return ;
  }
      /*
    C:\\Users\\Elie\\Documents\\yossef army\\app\\src\\assets\\sample-log\\log-position\\log1-position.json
    http://C:\\Users\\Elie\\Documents\\yossef army\\app\\src\\assets\\sample-log\\log-position\\log1-position.json
    ../../assets/sample-log/log-position/log1-position.json
    http://:\\Users\\Elie\\Documents\\test\\log1-position.json
    return this.http.get('http://127.0.0.1/');
    */
}
