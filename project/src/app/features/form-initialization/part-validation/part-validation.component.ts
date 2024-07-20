import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInitializationService } from 'src/app/core/services/form-initialization.service';
import { Part } from 'src/app/shared/models/form-initialization.model';

@Component({
  selector: 'app-part-validation',
  templateUrl: './part-validation.component.html',
  styleUrls: ['./part-validation.component.scss']
})
export class PartValidationComponent {
  partForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formInitializationService: FormInitializationService
  ) {
    this.partForm = this.fb.group({
      partId: ['', Validators.required],
      unitName: ['', Validators.required],
      groupName: ['', Validators.required],
      lineDescription: ['', Validators.required],
      partNumber: ['', Validators.required],
      partDescription: ['', Validators.required],
      partStatus: ['', Validators.required]
    });
  }

  validateForm(): boolean {
    if (this.partForm.invalid) {
      for (const control of Object.keys(this.partForm.controls)) {
        if (this.partForm.controls[control].invalid) {
          this.partForm.controls[control].markAsTouched();
          document.getElementById(control)?.focus();
          return false;
        }
      }
    }
    return true;
  }

  savePartRecord(): void {
    if (this.validateForm()) {
      const part: Part = this.partForm.value;
      this.formInitializationService.savePart(part).subscribe(
        response => {
          alert('Part record saved successfully!');
          this.resetForm();
        },
        error => {
          alert('Error saving part record: ' + error.message);
        }
      );
    }
  }

  updatePartRecord(): void {
    if (this.validateForm()) {
      const part: Part = this.partForm.value;
      this.formInitializationService.updatePart(part).subscribe(
        response => {
          alert('Part record updated successfully!');
          this.resetForm();
        },
        error => {
          alert('Error updating part record: ' + error.message);
        }
      );
    }
  }

  resetForm(): void {
    this.partForm.reset();
  }
}
