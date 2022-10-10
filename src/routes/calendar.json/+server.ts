import dayjs from "dayjs";
import ical from "node-ical";
import { CALENDAR } from '$env/static/private'
import utc from 'dayjs/plugin/utc'
import timezone from "dayjs/plugin/timezone"
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault("Europe/Berlin")

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET(event) {
    let data = await fetch(CALENDAR);
    let content = await data.text()
    let cal = ical.parseICS(content);
    let events = sort(cal);
    events = events.filter((value, index, self) => self.findIndex(t => t.summary == value.summary && dayjs(t.start).format("YYYY-MM-DD") == dayjs(value.start).format("YYYY-MM-DD")) === index)
    let dates = [];
    for (var i = 0; i < 20; i++) {
        if (events[i])
            dates.push(events[i])
    }
    return new Response(JSON.stringify(dates))
}

function sort(data: ical.CalendarResponse) {
    let result: ical.VEvent[] = [];
    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            let event = data[k];
            if (event.type == "VEVENT") {
                var vevent = event as ical.VEvent;
                if (vevent && vevent.start > new Date())
                    result.push(vevent);
                if (vevent.rrule)
                    result.push(...calculateRecurring(vevent));

            }
        }
    }
    return (result.sort(
        (a, b) => {
            if (a.start < b.start) return -1;
            if (a.start == b.start) return 0;
            else return 1;
        }
    ));
}

function calculateRecurring(event: ical.VEvent): ical.VEvent[] {
    const now = new Date();
    const nextY = new Date();
    nextY.setFullYear(now.getFullYear() + 1);
    let dates = event.rrule.between(now, nextY);
    let duration = dayjs(event.start).diff(event.end)
    if (event.exdate) {
        dates = dates.filter(date => (!event.exdate[dayjs(date).format("YYYY-MM-DD")]));
    }
    let newEvents = dates.map(date => {
        let start = date
        let offset = (event.start.getTimezoneOffset() - date.getTimezoneOffset())
        start.setHours(date.getHours() - offset / 60)
        return {
            type: 'VEVENT',
            start: start,
            summary: event.summary,
            description: event.description,
            location: event.location,
            end: new Date(start.valueOf() - duration) as ical.DateWithTimeZone
        } as ical.VEvent
    })
    return newEvents;
}