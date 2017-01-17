import { Component, ElementRef, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'file-upload',
    templateUrl: './file-uploader.component.html'
})

export class FileUploadComponent {
    filesToUpload: Array<File>;
 
    constructor() {
        this.filesToUpload = [];
    }
 
    upload() {
        console.log(this.filesToUpload)

    //Reintialize if there is time to get this live
    //     this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
    //         console.log(result);
    //     }, (error) => {
    //         console.error(error);
    //     });
    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
 
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}