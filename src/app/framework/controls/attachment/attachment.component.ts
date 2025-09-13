import { FrameworkService } from './../../../services-api/framework.service';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { ANGULARMATERIALModule } from '../../../module/angular-material.module';
import { IAttachmentResponse } from '../../../model/uploadImage.interface';

@Component({
  selector: 'attachment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ANGULARMATERIALModule],
  templateUrl: './attachment.component.html',
  styleUrl: './attachment.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class AttachmentComponent {
  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean=false;
  protected fieldValue:string="";

  constructor (private frameworkService:FrameworkService){}

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm(){
    this.addControlInForm();
 }

 private getFormValue(){
   this.frameworkForm.get(this.field.formControlName)?.valueChanges.subscribe(value => {
     this.fieldValue=value;
   });
 }

 private addControlInForm(): void {
   this.frameworkForm?.addControl(this.field.formControlName, new FormControl(''));
   this.getFormValue();
 }

 onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    this.handleFiles(input.files);
  }
}

private handleFiles(fileList: FileList): void {
  const files = Array.from(fileList);
  // 🚀 Trigger API upload right away
  this.uploadFiles(files);
}

private uploadFiles(files: File[]): void {
  this.frameworkService.uploadAttachment(files[0]).subscribe((attachmentResponse:IAttachmentResponse) => {
    this.frameworkForm.get(this.field.formControlName)?.setValue(attachmentResponse.fileurl)
  });
}
}
