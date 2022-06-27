<script>
  import { faXing } from "@fortawesome/free-brands-svg-icons";
  import ShareButton from "./ShareButton.svelte";

  export let url;
  export let title;

  let href;
  $: href = encodeURI(
    `https://www.xing.com/app/user?op=share;url=${url};title=${title}`
  );
</script>

<ShareButton {href} {title} platform="XING" icon={faXing} />
