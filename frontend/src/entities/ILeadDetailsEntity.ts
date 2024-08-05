const CustomerType = {
    INDIVIDUAL: 'Khách hàng cá nhân',
    NEW_CUSTOMER: 'Khách hàng mới'
}

export interface ILeadDetailsEntity {
    id?: string;
    customerType: string;
    customerFullName: string;
    dob: string;
    mobileCountry: string;
    mobileInitials: string;
    mobileNumber: string;
    landlineCountry: string;
    landlineInitials: string;
    landlineSTD: string;
    landlineNumber: string;
    landlineEXTN: string;
    NEOCIF: string;
    cifNumber: string;
    idNumber: string;
    idIssueDate: string;
    idIssuePlace: string;
    address: string;
    email: string;
    image: File | null;
  }

  export type CreateLeadDetailsDto = Omit<ILeadDetailsEntity, 'id'>;


  export type UpdateLeadDetailsDto = Partial<ILeadDetailsEntity>;

  export type FilterLeadDetailsDto = Partial<ILeadDetailsEntity>;

  