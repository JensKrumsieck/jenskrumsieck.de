<script>
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime.js";
  import "dayjs/locale/de.js";
  dayjs.extend(relativeTime);
  dayjs.locale("de");
  export let date
</script>

<time
  class="cursor-pointer"
  title={dayjs(date).format("DD.MM.YYYY")}
>
  {dayjs(date).fromNow()}
</time>
