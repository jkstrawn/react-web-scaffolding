
import { observable, action, makeObservable } from 'mobx';
import { RootStore } from './rootStore';
import { Note } from '../types/note';
import NoteController from '../controllers/noteController';

export class NoteStore {
    private rootStore: RootStore;

    @observable searchName: string = "";
    @observable notes: Note[] = [{ id: "1", title: "first note" }, { id: "2", title: "second note" }];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this);
    }

    getNote(id: string): Note | undefined {
        return this.notes.find(x => x.id == id);
    }

    @action async addNote(title: string) {

    }


}



// import { observable, action, makeObservable } from 'mobx';
// import { RootStore } from './rootStore';
// import { NoteHeader, Note } from '../types/note';
// import NoteController from '../controllers/noteController';

// export class NoteStore {
//     private rootStore: RootStore;

//     @observable searchName: string = "";
//     @observable headers: NoteHeader[] = [];
//     @observable notes: Note[] = [];
//     @observable loadingList: boolean = false;
//     @observable loadingDetail: boolean = false;

//     constructor(rootStore: RootStore) {
//         this.rootStore = rootStore;

//         makeObservable(this);
//     }

//     @action async fetchNotes() {
//         this.headers = await NoteController.getNoteHeaders();
//     }

//     @action async fetchNote(id: string) {
//         return await NoteController.getNote(id);
//     }

//     @action async getNote(id: string): Promise<Note> {
//         const existingNote = this.notes.find(x => x.id == id);
//         if (existingNote) {
//             return existingNote;
//         }

//         const note = await this.fetchNote(id);
//         this.notes = [...this.notes.filter(x => x.id != id), note];

//         return note;
//     }

//     @action async createNote(title: string, parentId?: string): Promise<NoteHeader> {
//         const note = await NoteController.createNote(title, parentId);
//         this.headers = [...this.headers, note];
//         return note;
//     }

//     @action async editNote(id: string, edit: Partial<Note>): Promise<Note> {
//         const update = await NoteController.editNote(id, edit);
//         const note = await this.getNote(id);
//         const updatedNote = { ...note, ...update };

//         this.notes = [...this.notes.filter(x => x.id != id), updatedNote];

//         if (note.parent) {
//             const parent = await this.fetchNote(note.parent.id);
//             this.notes = [...this.notes.filter(x => x.id != parent.id), parent];
//         }

//         return updatedNote;
//     }

//     @action async addAddendum(id: string, addendum: string): Promise<Note> {
//         const update = await NoteController.addAddendum(id, addendum);
//         const note = await this.getNote(id);
//         const updatedNote = { ...note, ...update };

//         this.notes = [...this.notes.filter(x => x.id != id), updatedNote];

//         return updatedNote;
//     }

//     @action async deleteNote(id: string) {
//         await NoteController.deleteNote(id);
//         this.headers = this.headers.filter(x => x.id != id);
//     }
// }