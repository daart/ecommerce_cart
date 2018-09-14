import { observable, action, computed } from 'mobx';

class TodosStore {
  @observable todos = []

  @action addTodo = (todo) => {
    this.todos.push(todo);
  }

  @action removeTodo = (id) => {

  }

  @action updateTodo = (id) => {

  }

}

export const todosStore = new TodosStore();
