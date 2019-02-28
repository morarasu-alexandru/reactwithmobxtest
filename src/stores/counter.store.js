import {observable} from "mobx";

class Counter {
    @observable counter = 0;
}

export default new Counter();
