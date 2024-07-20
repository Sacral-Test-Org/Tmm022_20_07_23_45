export class FormInitializationModel {
  systemDate: string;
  screenName: string;
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  lineId: string;
  lineDescription: string;
  partId: string;
  partNumber: string;
  partDescription: string;
  partStatus: string;
  globalParameter: number;
  mode: string;
  saveEnabled: boolean;

  constructor() {
    this.systemDate = '';
    this.screenName = '';
    this.unitId = '';
    this.unitName = '';
    this.groupId = '';
    this.groupName = '';
    this.lineId = '';
    this.lineDescription = '';
    this.partId = '';
    this.partNumber = '';
    this.partDescription = '';
    this.partStatus = 'A'; // Default value as per user story
    this.globalParameter = 0; // Default value
    this.mode = 'Create Mode'; // Default value as per user story
    this.saveEnabled = false; // Default value
  }
}