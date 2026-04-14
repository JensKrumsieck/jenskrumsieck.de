<script lang="ts">
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime.js";
  import "dayjs/locale/de.js";
  dayjs.extend(relativeTime);
  dayjs.locale("de");

  type Props = {
    date: dayjs.ConfigType;
  };
  let { date }: Props = $props();
</script>

<time class="cursor-pointer" title={dayjs(date).format("DD.MM.YYYY")}>
  {dayjs(date).fromNow()}
</time>
