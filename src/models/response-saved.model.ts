import { ResponseModel } from "./response.model";

export interface ResponseSavedModel<T> extends ResponseModel {
    data: T;
}
