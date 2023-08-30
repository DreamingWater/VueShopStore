export interface shipBaseInfo {
  fullname: string;
  phone: string;
  email: string;
  address: string;
}
export interface shipInfo extends shipBaseInfo{
  country: string;
  state: string;
}
