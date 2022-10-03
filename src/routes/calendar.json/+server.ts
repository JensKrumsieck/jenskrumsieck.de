import * as ical from "node-ical";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET(event) {
    let data = await fetch("");
    let content = await data.text()
    let cal = ical.parseICS(content);
    let events = sort(cal);
    let dates = [];
    for (var i = 0; i < 10; i++) {
        dates.push(events[i])
    }
    return new Response(JSON.stringify(dates))
}

function sort(data: ical.CalendarResponse) {
    let result: ical.VEvent[] = [];
    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            let event = data[k];
            if (data[k].type == "VEVENT") result.push(event as ical.VEvent);
        }
    }
    return result.sort(
        (a, b) => b.start.getUTCMilliseconds() - a.start.getUTCMilliseconds()
    );
}