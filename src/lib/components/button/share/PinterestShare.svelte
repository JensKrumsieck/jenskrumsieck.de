<script>
    import { faPinterest } from "@fortawesome/free-brands-svg-icons";
    import ShareButton from "./ShareButton.svelte";
  
    export let url;
    export let title;
    export let media;
  
    let href;
    $: href = encodeURI(
        `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${title}`
    );
  </script>
  
  <ShareButton {href} {title} platform="Pinterest" icon={faPinterest}/>
  