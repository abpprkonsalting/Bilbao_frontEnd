import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { File } from 'src/app/infrastructure/model/file-model';
import { FileStatus } from 'src/app/infrastructure/enums/file-status-enum';
import { FileSizeUnit } from 'src/app/infrastructure/enums/file-size-unit-enum';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.less']
})
export class FileListComponent implements OnInit {
  files: File[];

  constructor() {

    this.files = [
      new File(1, 'Archivo1'),
      new File(1, 'Archivo2 con un nombre muy largo que debemos probar'),
      new File(1, 'Archivo3'),
      new File(1, 'Archivo4'),
      new File(1, 'Archivo5'),
      new File(1, 'Archivo6'),
      new File(1, 'Archivo7'),
      new File(1, 'Archivo8'),
      new File(1, 'Archivo9'),
      new File(1, 'Archivo10'),
      new File(1, 'Archivo1'),
      new File(1, 'Archivo2 con un nombre muy largo que debemos probar'),
      new File(1, 'Archivo3'),
      new File(1, 'Archivo4'),
      new File(1, 'Archivo5'),
      new File(1, 'Archivo6'),
      new File(1, 'Archivo7'),
      new File(1, 'Archivo8'),
      new File(1, 'Archivo9'),
      new File(1, 'Archivo10'),
    ];
  }

  ngOnInit(): void {
  }

  getFileStatus(status: FileStatus) {
    return FileStatus[status];
  }

  getFileSizeUnit(sizeUnit: FileSizeUnit) {
    return FileSizeUnit[sizeUnit];
  }

  afterPanelExpand(el: HTMLElement) {
    el.focus();
  }

  afterPanelCollapse(file: any) {
    //console.log(file.name);
  }

  onFileSelected($event: any){

  }

}
