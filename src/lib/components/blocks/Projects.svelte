<script lang="ts">
  import Title from "../typography/Title.svelte";
  import type { Snippet } from "svelte";

  type Props = {
    title: string;
    icon: string;
    image?: string;
    children?: Snippet;
  };

  let { title, icon, image, children }: Props = $props();
</script>

<div class="flex md:flex-row flex-col-reverse my-8">
  <div class="flex flex-col">
    <div class="flex">
      <img src={icon} alt={"Logo " + title} class="w-12 h-12 my-auto" />
      <Title class="ml-4">{title}</Title>
    </div>
    {@render children?.()}
  </div>
  {#if image}
    <img class="md:max-w-[50%] h-fit md:ml-8" src={image} loading="lazy" alt=" Screenshot" />
  {/if}
</div>
