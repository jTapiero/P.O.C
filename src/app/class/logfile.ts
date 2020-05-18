import { LogType } from '@class/log-type.enum';
export interface Logfile {
    name: string;
    path: string;
    typeLog: LogType;
    extension?: string;
}
