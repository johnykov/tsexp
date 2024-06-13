import {User} from "./user";
import {Role} from "./role";

export interface UserRole{
    user: User
    roles: Role[]
}
