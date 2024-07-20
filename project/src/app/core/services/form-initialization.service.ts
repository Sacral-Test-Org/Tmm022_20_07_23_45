import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormInitializationModel, Part, Line } from '../../shared/models/form-initialization.model';

@Injectable({
  providedIn: 'root'
})
export class FormInitializationService {
  constructor(private http: HttpClient) {}

  maximizeWindow(): void {
    // Logic to maximize the main window
    console.log('Window maximized');
  }

  setTitle(title: string): void {
    // Logic to set the title of the main window
    document.title = title;
  }

  getCurrentDate(): string {
    // Logic to get the current date
    return new Date().toLocaleDateString();
  }

  setMode(mode: string): void {
    // Logic to set the mode of the form
    console.log(`Mode set to ${mode}`);
  }

  enableFields(fields: string[]): void {
    // Logic to enable the specified fields for user input
    fields.forEach(field => {
      const element = document.getElementById(field);
      if (element) {
        element.removeAttribute('disabled');
      }
    });
  }

  setCursor(field: string): void {
    // Logic to set the cursor to the specified field
    const element = document.getElementById(field);
    if (element) {
      element.focus();
    }
  }

  getFormData(): Observable<FormInitializationModel> {
    // Logic to fetch form initialization data from an API or mock data source
    return this.http.get<FormInitializationModel>('/api/form-data');
  }

  validateFields(formData: FormInitializationModel): string[] {
    // Logic to validate the fields in formData based on the specified rules
    const errors: string[] = [];
    if (!formData.partStatus) {
      errors.push('Part Status is required');
    }
    if (!formData.unitId || !formData.unitName) {
      errors.push('Unit ID and Unit Name are required');
    }
    if (!formData.groupId || !formData.groupName) {
      errors.push('Group ID and Group Name are required');
    }
    if (!formData.lineId || !formData.lineDesc) {
      errors.push('Line ID and Line Description are required');
    }
    if (!formData.partNo) {
      errors.push('Part Number is required');
    }
    return errors;
  }

  getPartNumbers(globalParameter: number): Observable<Part[]> {
    // Logic to call the PartController API to fetch the list of part numbers based on the global parameter
    return this.http.get<Part[]>(`/api/parts?globalParameter=${globalParameter}`);
  }

  checkPartNumberExistence(partNumber: string, globalParameter: number): Observable<boolean> {
    // Logic to call the PartController API to check if the part number exists in the database based on the global parameter
    return this.http.get<boolean>(`/api/parts/exists?partNumber=${partNumber}&globalParameter=${globalParameter}`);
  }

  resetForm(): void {
    // Logic to clear the form data and reinitialize it to its default state
    console.log('Form reset to default state');
  }

  setPartStatus(status: string): void {
    // Logic to set the part status to the provided value
    console.log(`Part status set to ${status}`);
  }

  setGlobalParameter(parameter: number): void {
    // Logic to set the global parameter to the provided value
    console.log(`Global parameter set to ${parameter}`);
  }

  executeWhenNewFormInstance(): void {
    // Logic to execute any necessary initialization logic for the form
    console.log('WHEN-NEW-FORM-INSTANCE trigger executed');
  }

  savePart(part: Part): Observable<any> {
    // Logic to make an HTTP POST request to save the part record
    return this.http.post('/api/parts', part);
  }

  updatePart(part: Part): Observable<any> {
    // Logic to make an HTTP PUT request to update the part record
    return this.http.put(`/api/parts/${part.partId}`, part);
  }

  getGlobalParameter(): Observable<number> {
    // Logic to fetch the global parameter value from the server or configuration
    return this.http.get<number>('/api/global-parameter');
  }

  getLineLov(): Observable<Line[]> {
    // Logic to fetch the LINE_LOV list of values from the server
    return this.http.get<Line[]>('/api/lines');
  }

  getEditLineLov(): Observable<Line[]> {
    // Logic to fetch the EDIT_LINE_LOV list of values from the server
    return this.http.get<Line[]>('/api/edit-lines');
  }

  validateLineId(lineId: string, lineDesc: string, unitId: string, groupId: string): Observable<boolean> {
    // Logic to validate the line ID and line description against the HPM_LINE_MASTER table for the given unit ID and group ID
    return this.http.get<boolean>(`/api/lines/validate?lineId=${lineId}&lineDesc=${lineDesc}&unitId=${unitId}&groupId=${groupId}`);
  }
}
