import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogFileReaderService {

  constructor(private http: HttpClient) {
    /*
    C:\\Users\\Elie\\Documents\\yossef army\\app\\src\\assets\\sample-log\\log-position\\log1-position.json
    http://C:\\Users\\Elie\\Documents\\yossef army\\app\\src\\assets\\sample-log\\log-position\\log1-position.json
    ../../assets/sample-log/log-position/log1-position.json
    */
  }

  getJsonData(): any {
   return this.http.get('http://:\\Users\\Elie\\Documents\\test\\log1-position.json');
  }

  private getFileName(PathFile: string): boolean{
    return ;
  }

  private parseFileToJson(): string{
    return '';
  }

  private isJsonFile(nameFile: string): boolean{
    return ;
  }
}
