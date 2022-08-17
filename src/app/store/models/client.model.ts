export interface clientModel {
    lastName: string,
    name: string,
    middleName?: string,
    dateOfBirth: string,
    phoneNumber: number,
    gender?:string,
    clientGroup: string,
    coordinator?: string,
    smsSend?: boolean
  }