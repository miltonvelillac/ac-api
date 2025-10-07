import { userModel } from "./user.model";

export interface RegisterModel {
    users: userModel;
    dateTime: string;
    registerBy: string;
}
