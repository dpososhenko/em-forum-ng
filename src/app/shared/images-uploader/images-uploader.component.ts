import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-uploader',
  templateUrl: './images-uploader.component.html',
  styleUrls: ['./images-uploader.component.scss']
})
export class ImagesUploaderComponent implements OnInit {
  public imgSrcList: string[] = [];

  constructor() {}

  ngOnInit() {}

  public onFileChanged(event): void {
    const files: File[] = event.target.files;

    // TODO: updated with material errors + open new select window
    if (files.length > 5) {
      alert('Max count of files');
      return;
    }

    files.forEach = Array.prototype.forEach;

    files.forEach((file: File) => {
      const reader: FileReader = new FileReader();

      reader.onload = (readerEvent: ProgressEvent & { target: { result: string } }): void => {
        this.imgSrcList.push(readerEvent.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
}
