
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { AdminApiService } from '../../../services-api/admin-api.service';
import { IAttachmentResponse } from '../../../model/uploadImage.interface';
import { IOfferBanner } from '../../../model/offerBanner.interface';
import { GloabalModule } from '../../../module/gloabal.module';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [ReactiveFormsModule, GloabalModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class SampleComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  private selectedBannerFile: File | null = null;
  public bannerForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,private adminApiService:AdminApiService){}

  ngOnInit(): void {
    this.generateBannerForm();
  }

  private generateBannerForm(): void {
    this.bannerForm = this.formBuilder.group({
      OfferName: ['', Validators.required],
      RouteURL: [''],
      ImageURL: ['']
    });
  }

  protected onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedBannerFile = fileInput.files[0];
    }
  }

  protected async onSubmitBannerForm(): Promise<void> {
    await this.uploadImage();
    let offerBanner: IOfferBanner = this.bannerForm?.value;
    this.postBannerOffer(offerBanner)
  }

  private postBannerOffer(offerBanner: IOfferBanner): void {
    this.adminApiService.postBannerOffer(offerBanner).subscribe((offerResponse: string) => {
      this.resetBannerForm();
    })
  }

  private resetBannerForm(): void {
    this.bannerForm?.reset();
    this.selectedBannerFile = null;
    this.fileInput.nativeElement.value = "";
  }

  private uploadImage(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.adminApiService.uploadImage(this.selectedBannerFile).subscribe((uploadImageResponse: IAttachmentResponse) => {
        this.bannerForm?.controls['ImageURL'].setValue(uploadImageResponse.fileurl);
        resolve(true)
      })
    })
  }
}
