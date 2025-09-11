import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, NO_ERRORS_SCHEMA, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { ANGULARMATERIALModule } from '../../../module/angular-material.module';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { FrameworkService } from '../../../services-api/framework.service';

@Component({
  selector: 'look-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ANGULARMATERIALModule],
  templateUrl: './look-up.component.html',
  styleUrl: './look-up.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class LookUpComponent {
  options: any[] = [];
  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean = false;
  @ViewChild('chipInput') chipInput!: ElementRef<HTMLInputElement>;
  filteredOptions: Observable<any[]> | undefined;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedValues: any[] = [];   // Store selected chips here
  protected currentInput:string="";
  constructor(private frameworkService:FrameworkService){}

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm() {
    this.addControlInForm();
  }
  private addControlInForm(): void {
    this.frameworkForm?.addControl(this.field.formControlName, new FormControl(''));
    this.getLookupFieldRecord();
  }

  private getLookupFieldRecord(){
    this.frameworkService.getAllRecords(this.field.lookupRepositoryName).subscribe((lookupResponse:any)=>{
      this.options=lookupResponse;
      this.initalizeLookupFilter();
    })
  }

  private initalizeLookupFilter() {
    const lookUpcontrol = this.frameworkForm.get(this.field.formControlName);
    if (lookUpcontrol)
      this.filteredOptions = lookUpcontrol.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value[this.field.lookupField1?this.field.lookupField1:''];
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option[this.field?.lookupField1?this.field.lookupField1:''].toLowerCase().includes(filterValue));
  }
  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value;
    if (value && !this.selectedValues.includes(value)) {
      const lookupvalue=value[this.field.lookupField1?this.field.lookupField1:'']
      this.selectedValues.push(value);
    }
    this.frameworkForm.get(this.field.formControlName)?.setValue(this.selectedValues);
    this.chipInput.nativeElement.value = '';
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = (event.value || '').trim();

    // Add the value to chips
    if (value && !this.selectedValues.includes(value)) {
      this.selectedValues.push(value);

      // Update the FormControl with the array of selected values
      this.frameworkForm.get(this.field.formControlName)?.setValue(this.selectedValues);
    }

    // Clear the input field
    if (input) {
      input.value = '';
    this.chipInput.nativeElement.value="";
    }
  }

  remove(option: any): void {
    const index = this.selectedValues.indexOf(option);
    if (index >= 0) {
      this.selectedValues.splice(index, 1);
    }
    this.frameworkForm.get(this.field.formControlName)?.setValue('');
    this.chipInput.nativeElement.value="";
  }

}
