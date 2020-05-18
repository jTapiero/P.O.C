import { LogType } from '@class/log-type.enum';

export interface Logfile {
    file: File;
    typeLog: LogType;
    path: string;
}
