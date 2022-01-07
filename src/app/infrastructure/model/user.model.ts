

export class User {
  id: number;
  password?: string;
  // name: string;
  // surname: string;
  // imageUrl: string;
  roles: string[];
  email: string;
  new: string = '';

  constructor(id?: number, username?: string, password?: string, name?: string, surname?: string, imageUrl?: string,
              roles?: string[], email?: string) {
    id != null ? this.id = id : this.id = 0;
    email != null ? this.email = email : this.email = '';
    // name != null ? this.name = name : this.name = '';
    // surname != null ? this.surname = surname : this.surname = '';
    // imageUrl != null ? this.imageUrl = imageUrl : this.imageUrl = '';
    password != null ? this.password = password : this.password = '';
    roles != null ? this.roles = roles : this.roles = [];
  }

}
