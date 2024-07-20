import { Component, OnInit } from '@angular/core';
import { FormInitializationService } from 'src/app/core/services/form-initialization.service';
import { Part } from 'src/app/shared/models/part.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-part-number',
  templateUrl: './part-number.component.html',
  styleUrls: ['./part-number.component.scss']
})
export class PartNumberComponent implements OnInit {
  partNumbers: Part[] = [];
  globalParameter: number = 0; // This should be set based on your application logic

  constructor(private formInitializationService: FormInitializationService) {}

  ngOnInit(): void {
    this.fetchPartNumbers();
  }

  fetchPartNumbers(): void {
    this.formInitializationService.getPartNumbers(this.globalParameter).subscribe(
      (parts: Part[]) => {
        this.partNumbers = parts;
      },
      (error) => {
        console.error('Error fetching part numbers', error);
      }
    );
  }

  onPartNumberSelect(partNumber: string): void {
    // Logic to handle part number selection
    // Assuming formInitializationService has a method to update the selected part number
    this.formInitializationService.updateSelectedPartNumber(partNumber);
  }
}
