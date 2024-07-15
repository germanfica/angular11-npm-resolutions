import { Component } from '@angular/core';
import { BlockBlobClient} from '@azure/storage-blob';

// const BlockBlobClient = require("@azure/storage-blob");



// import { FileParallelUploadOptions, ShareFileClient } from '@azure/storage-file-share';
// import { ShareServiceClient } from "@azure/storage-file-share";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular11-node16';
}
