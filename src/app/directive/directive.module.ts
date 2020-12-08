import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDirective } from './file-upload.directive';



@NgModule({
  declarations: [FileUploadDirective],
  imports: [
    CommonModule
  ],
  exports: [FileUploadDirective]
})
export class DirectiveModule { }
