import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../model/user';

@Pipe({
  name: 'userNotAdmin'
})
export class UserNotAdminPipe implements PipeTransform {

  transform(value: User): boolean {
    return !value.roles.some(entry => entry === 'ADMIN');
  }

}
