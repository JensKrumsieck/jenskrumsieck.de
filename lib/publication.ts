export type Publication = {
    title: string,
    authors: string[],
    annotation?: string,
    journal: Journal,
    date: string,
    doi?: string,
    image: string,
    imageCopyright?: string,
    abstract: string
}

export type Journal = {
    journalAbbr: string,
    issue: number,
    page: number
}