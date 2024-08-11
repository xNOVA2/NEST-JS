
import { IBaseRepository } from "src/common/repositories/base.repository.interface";
import { IUser, IUserDocs } from "../user.interface";
  
  export interface IUserRepository
    extends IBaseRepository<IUser, IUserDocs> {}
  