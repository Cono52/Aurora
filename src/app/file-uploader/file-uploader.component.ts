import { Component, ElementRef, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'file-upload',
    templateUrl: './file-uploader.component.html'
})

export class FileUploadComponent {
    @Input() multiple: boolean = false;

    constructor(private http: Http, private el: ElementRef) {}

    upload() {
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('[type="file"]');
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file[]', inputEl.files.item(i));
                console.log(inputEl.files.item(i))
            }
        }
    }
}