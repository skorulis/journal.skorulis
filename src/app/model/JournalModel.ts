export interface JournalMonth {
    title: string;
    days: JournalDay[]
}

export interface JournalDay {
    date: string
    entries: JournalEntry[]
}

export interface JournalEntry {
    text: string
}