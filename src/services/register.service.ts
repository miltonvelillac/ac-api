import { RegisterTransactionModel } from "../models/register-transaction.model";
import { RegisterModel } from "../models/register.model";
import { ResponseSavedModel } from "../models/response-saved.model";

export class RegisterService {
  async registerUsers(props: { registerTransaction: RegisterTransactionModel }): Promise<ResponseSavedModel<RegisterModel[]>> {
    const { registerTransaction } = props;
    return {
      message: 'register',
      timestamp: new Date().toISOString(),
      data: registerTransaction.registers
    };
  }

  async saveUsers(props: { register: RegisterModel }): Promise<void> {
    console.log('saved in db');
  }
}
