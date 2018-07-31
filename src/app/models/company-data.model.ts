/**
 * Company data model
 */

export interface ICompanyData {
  name: string;
  address: string;
  status: string;
  modeOfOperations: Array<string>;
  keyContacts: Array<ICompanyKeyContact>;
  financialPerformance: ICompanyFinancialPerformance;
}

interface ICompanyKeyContact {
  name: string;
  email: string;
  designation: string;
  phone: string;
}

interface ICompanyFinancialPerformance {
  years: Array<Number>;
  targetAchieved: Array<Number>;
}

export class CompanyData {
  constructor(
    public name: string,
    public address: string,
    public status: string,
    public modeOfOperations: Array<string>,
    public keyContacts: Array<ICompanyKeyContact>,
    public financialPerformance: ICompanyFinancialPerformance,
  ) {}
}
