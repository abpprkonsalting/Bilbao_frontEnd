import { FileStatus } from "../enums/file-status-enum";
import { FileSizeUnit } from "../enums/file-size-unit-enum";

export class File {
    id: number;
    name: string;
    status: FileStatus;
    size: number;
    sizeUnit: FileSizeUnit;
  
    constructor(id: number, name: string, status: FileStatus = FileStatus.NonUploaded, 
                size: number = 0, sizeUnit: FileSizeUnit = FileSizeUnit.KB) {
      this.id = id;    
      this.name = name;
      this.status = status;
      this.size = size;
      this.sizeUnit = sizeUnit;
    }
  
  }