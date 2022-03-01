import { UserNotAdminPipe } from './user-not-admin.pipe';

describe('UserNotAdminPipe', () => {
  it('create an instance', () => {
    const pipe = new UserNotAdminPipe();
    expect(pipe).toBeTruthy();
  });
});
