<script lang="ts">
  import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";
  import type * as ical from "node-ical";
  import dayjs, { tz } from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime.js";
  import "dayjs/locale/de.js";
  import Subtitle from "../typography/Subtitle.svelte";
  dayjs.extend(relativeTime);
  import utc from "dayjs/plugin/utc";
  import timezone from "dayjs/plugin/timezone";
  dayjs.extend(timezone);
  dayjs.extend(utc);

  const months = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ];

  export let dates: ical.VEvent[];
</script>

<div class="grid md:grid-cols-2 gap-4">
  {#each dates as event}
    <div
      class="flex bg-gray hover:bg-lighter-green hover:shadow-sm rounded-lg p-3"
    >
      <div
        class="flex items-center flex-col justify-center bg-green rounded-lg p-6 w-24 h-24 self-center grow-0 shrink-0"
      >
        <div class="text-2xl font-bold">
          {dayjs(event.start).format("DD")}.
        </div>
        <div class="text-xl">
          {months[dayjs(event.start).month()]}
        </div>
        <div class="text-xs">
          {dayjs(event.start).year()}
        </div>
      </div>
      <div class="px-4 py-2 xl:grid xl:grid-cols-2 w-full">
        <div>
          <Subtitle dense>
            {event.summary}
          </Subtitle>
          {#if event.description != "" && event.description != "undefined" && event.description != undefined}
            <p>{event.description}</p>
          {/if}
        </div>
        <div>
          <div class="flex flex-row items-center">
            <Fa icon={faClock} size="xs" />
            <div class="text-dark font-medium text-xs px-2">
              {dayjs(event.start)
                .tz("Europe/Berlin")
                .format("DD.MM.YYYY HH:mm")}, Dauer: ca.
              {dayjs(event.end).tz("Europe/Berlin").from(event.start, true)}
            </div>
          </div>
          {#if event.location != ""}
            <div class="flex flex-row items-center">
              <Fa icon={faLocationDot} size="xs" />
              <p class="italic text-xs mt-auto pt-2 px-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query={event.location}"
                  target="_blank"
                  class="text-dark hover:text-dark-green hover:underline"
                  title="Bei GoogleMaps anzeigen"
                >
                  {event.location}
                </a>
              </p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
