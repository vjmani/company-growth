/**
 * Company data model
 */

export interface ICompanyData {
  name: string;
  address: string;
  status: string;
  modeOfOperations: string;
  keyContacts: Array<string>;
  financialPerformance?: Array<ICompanyFinancialPerformance>;
  chartLabels?: Array<string>;
}

interface ICompanyKeyContact {
  name: string;
  email: string;
  designation: string;
  phone: string;
}

interface ICompanyFinancialPerformance {
  label: string;
  data: Array<Number>;
}

export class CompanyData implements ICompanyData {
  constructor(
    public name: string,
    public address: string,
    public status: string,
    public modeOfOperations: string,
    public keyContacts: Array<string>,
    public financialPerformance?: Array<ICompanyFinancialPerformance>,
    public chartLabels?: Array<string>,
  ) {}
}
