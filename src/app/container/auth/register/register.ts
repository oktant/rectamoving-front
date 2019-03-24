export class Register {
  private email: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private phoneNumber: string;
  private city: string
  private country: number;

  public constructor(email: string, password: string, firstName: string, lastName: string,  city: string, country: number, phoneNumber: string) {
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.country = country;

  }

}
