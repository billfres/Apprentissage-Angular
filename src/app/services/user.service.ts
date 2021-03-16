import { Subject } from 'rxjs/Subject';
import { User } from "../models/User.model";

export class UserService{
   /*
    private users: User[] = [];
    cet array vide sera remplacé par le tableau en bas
  */
 private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
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