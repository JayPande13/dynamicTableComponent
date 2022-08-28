import { commonOptions } from './jsonformcontrols';

export interface tableData {
  Registration_Number: string;
  Declaration_Type: string;
  Status: string;
  Submission_Date: string;
  Action: commonOptions[];
  id: number;
  Custom_Office: string;
}
