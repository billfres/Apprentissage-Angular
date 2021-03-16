import { Subject } from 'rxjs/Subject';
import { User } from "../models/User.model";

export class UserService{
    private users: User[] = [];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }
//this method adds an user
    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
      }
}