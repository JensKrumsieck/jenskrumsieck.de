<script>
  import Fa from "svelte-fa";
  export let href;
  export let title;
  export let platform;
  export let icon;
</script>

<a
  {href}
  target="_blank"
  rel="noopener"
  title={`Den Beitrag "${title}" auf ${platform} teilen`}
  aria-label={`Den Beitrag "${title}" auf ${platform} teilen`}
  class="hover:text-dark-green"
>
  <Fa {icon} size="2x" />
</a>
