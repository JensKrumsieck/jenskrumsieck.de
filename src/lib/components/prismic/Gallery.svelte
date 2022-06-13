<script>
  import * as ph from "@prismicio/helpers";
  import { onMount } from "svelte";

  let Carousel; // for saving Carousel component class
  let carousel; // for calling methods of the carousel instance
  onMount(async () => {
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });
  export let slice;
</script>

<section class="my-10">
  <svelte:component
    this={Carousel}
    bind:this={carousel}
    autoplay="true"
    pauseOnFocus="true"
    particlesToShow="3"
  >
    {#each slice.items as item}
      <div class="px-4">
        <a href={ph.asImageSrc(item.image)}>
          <img
            src={ph.asImageSrc(item.image)}
            alt={item.alt ? item.alt : "Galerie"}
          />
        </a>
      </div>
    {/each}
  </svelte:component>
</section>
