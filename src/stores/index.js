// import { todosStore } from './todos.store';
import { SessionStore } from './session.store';
import { UserStore } from './user.store';

export class RootStore {
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.userStore = new UserStore(this);
  }
}
