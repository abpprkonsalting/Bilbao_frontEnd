import { LoginActions } from '../enums/login-actions-enum';

export interface LoginDialogData {
    email: string;
    password: string;
    action: LoginActions;
    rememberme: boolean;
    createUser: boolean;
  }