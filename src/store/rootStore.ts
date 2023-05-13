import { action, makeObservable, observable } from "mobx";
import { NoteStore } from "./noteStore";


export class RootStore {

    @observable note: NoteStore;

    @observable userFirstName: string = "";

    constructor() {
        this.note = new NoteStore(this);

        makeObservable(this);
    }

    @action setFirstName(name: string) {
        this.userFirstName = name;
    }
}

const store = new RootStore();

export default store;