export interface identityModel {
    documentType: string,
    series?: string,
    number: number,
    issuedBy?:string,
    dateOfIssue: string,
    file?: File,
  }