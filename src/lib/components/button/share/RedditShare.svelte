<script>
    import { faReddit } from "@fortawesome/free-brands-svg-icons";
    import ShareButton from "./ShareButton.svelte";
  
    export let url;
    export let title;
  
    let href;
    $: href = encodeURI(
      `https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`
    );
  </script>
  
  <ShareButton {href} {title} platform="Reddit" icon={faReddit}/>
  