<script>
  import { faFacebook } from "@fortawesome/free-brands-svg-icons";
  import ShareButton from "./ShareButton.svelte";

  export let url;
  export let title;

  let href;
  $: href = encodeURI(
    `https://facebook.com/sharer/sharer.php?u=${url}&quote=${title}`
  );
</script>

<ShareButton {href} {title} platform="Facebook" icon={faFacebook}/>
