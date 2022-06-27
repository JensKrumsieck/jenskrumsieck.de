<script>
  import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
  import ShareButton from "./ShareButton.svelte";

  export let url;
  export let title;
  let text = title + " - auf " + url;

  let href;
  $: href = encodeURI(`whatsapp://send?text=${text}`);
</script>

<ShareButton {href} {title} platform="WhatsApp" icon={faWhatsapp} />
