import { RegisterModel } from "../models/register.model";
import { ResponseSavedModel } from "../models/response-saved.model";
import { userModel } from "../models/user.model";

export class RegisterService {
  async registerUsers(props: { register: RegisterModel }): Promise<ResponseSavedModel<userModel[]>> {
    const { register } = props;
    return {
      message: 'register',
      timestamp: new Date().toISOString(),
      data: register.users
    };
  }

  async saveUsers(props: { register: RegisterModel }): Promise<void> {
    console.log('saved in db');
  }
}
