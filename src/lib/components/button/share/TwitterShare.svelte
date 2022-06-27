<script>
  import { faTwitter } from "@fortawesome/free-brands-svg-icons";
  import ShareButton from "./ShareButton.svelte";

  export let url;
  export let title;

  let href;
  $: href = encodeURI(
    `https://twitter.com/intent/tweet/?text=${title}&url=${url}&via=jens_ation`
  );
</script>

<ShareButton {href} {title} platform="Twitter" icon={faTwitter} />
