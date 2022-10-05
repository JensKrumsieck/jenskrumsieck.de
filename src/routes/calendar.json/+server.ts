import dayjs from "dayjs";
import * as ical from "node-ical";
import { CALENDAR } from '$env/static/private'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET(event) {
    let data = await fetch(CALENDAR);
    console.log(ical)
    let content = await data.text()
    let cal = ical.parseICS(content);
    let events = sort(cal);
    let dates = [];
    for (var i = 0; i < 10; i++) {
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
        return {
            type: 'VEVENT',
            start: date as ical.DateWithTimeZone,
            summary: event.summary,
            description: event.description,
            location: event.location,
            end: new Date(dayjs(date).valueOf() - duration) as ical.DateWithTimeZone
        } as ical.VEvent
    })
    return newEvents;
}