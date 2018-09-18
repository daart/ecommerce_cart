import { observable, action, computed } from 'mobx';

export class SessionStore {
  @observable authUser = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setAuthUser = (authUser) => {
    this.authUser = authUser; 
  }
}
