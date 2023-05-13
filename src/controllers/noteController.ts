import axios from "axios";
import { Note } from "../types/note";
import Environment from "../utility/environment";

export default class NoteController {

    static async getNotes(): Promise<Array<Note>> {
        console.log("NoteController - getNotes");

        return axios.get(Environment.notesUrl)
            .then(response => {
                console.log("response for", Environment.notesUrl);
                console.log(response.data);

                const data = response.data as Note[];

                return data;
            });
    }

    static async getNote(id: string): Promise<Note> {
        console.log("NoteController - getNote");

        return axios.get(`${Environment.notesUrl}/${id}`)
            .then(response => {
                console.log("response for", `${Environment.notesUrl}/${id}`);
                console.log(response.data);

                const data = response.data as Note;

                return data;
            });
    }
}