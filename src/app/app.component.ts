import { Component } from '@angular/core';
import { BlockBlobClient} from '@azure/storage-blob';
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, ICellEditorParams } from 'ag-grid-community';
import { ColDef, ColGroupDef } from 'ag-grid-community';



// const BlockBlobClient = require("@azure/storage-blob");



// import { FileParallelUploadOptions, ShareFileClient } from '@azure/storage-file-share';
// import { ShareServiceClient } from "@azure/storage-file-share";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ICellEditorAngularComp {
  getValue() {
    throw new Error('Method not implemented.');
  }
  isPopup?(): boolean {
    throw new Error('Method not implemented.');
  }
  getPopupPosition?(): string | undefined {
    throw new Error('Method not implemented.');
  }
  isCancelBeforeStart?(): boolean {
    throw new Error('Method not implemented.');
  }
  isCancelAfterEnd?(): boolean {
    throw new Error('Method not implemented.');
  }
  focusIn?(): void {
    throw new Error('Method not implemented.');
  }
  focusOut?(): void {
    throw new Error('Method not implemented.');
  }
  getFrameworkComponentInstance?() {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellEditorParams): void {
    throw new Error('Method not implemented.');
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }
  title = 'angular11-node16';
}
