export type Poster = {
    title: string,
    authors: string[],
    image: string,
    type: 'poster' | 'oral' | 'misc'
    conferences: Conference[]
}

export type Conference = {
    title: string,
    startDate: string,
    endDate?: string,
    location?: string,
    url?: string
}