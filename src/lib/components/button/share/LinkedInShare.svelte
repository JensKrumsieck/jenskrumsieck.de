<script>
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
  import ShareButton from "./ShareButton.svelte";

  export let url;
  export let title;

  let href;
  $: href = encodeURI(
    `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  );
</script>

<ShareButton {href} {title} platform="LinkedIn" icon={faLinkedin} />
