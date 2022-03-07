import { LoginAction } from '../enums/login-action';

export interface LoginDialogData {
    email: string;
    password: string;
    action: LoginAction;
    rememberme: boolean;
    createUser: boolean;
    superAdmin: boolean;
    superAdminPassword: string;
  }
