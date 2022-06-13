<script>
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import "dayjs/locale/de";
  dayjs.extend(relativeTime);
  dayjs.locale("de");
  export let date
</script>

<span
  class="cursor-pointer"
  title={dayjs(date).format("DD.MM.YYYY")}
>
  {dayjs(date).fromNow()}
</span>
