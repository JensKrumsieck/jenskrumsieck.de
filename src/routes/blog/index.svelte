<script>
  import Rect from "$lib/components/deco/Rect.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  import * as ph from "@prismicio/helpers";
  export let posts;
</script>

<Rect />
<Container padding class="mt-12">
  <BiggerTitle>Was gibt's Neues?</BiggerTitle>

  {#each posts.results as post}
    {ph.asText(post.data.title)} <br/>
  {/each}
</Container>
