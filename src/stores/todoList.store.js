import {observable} from "mobx";

class TodoListStore {
    @observable todoList = [{msg: "first msg"}, {msg: "second msg"}, {msg: "third msg"}];
}

export default new TodoListStore();
