import { observable, action } from 'mobx';

export class UserStore {
  @observable
  users = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setUsers = (users) => {
    this.users = users;
  }
}
