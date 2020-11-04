export class Entry {
    id: number;
    heading: String;
    entry: String;
    mood: Number;

    constructor(id: number, heading: string, entry: String, mood: Number) {
        this.id = id;
        this.heading = heading;
        this.entry = entry;
        this.mood = mood;
    }
}
