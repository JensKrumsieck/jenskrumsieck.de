<script lang="ts">
  import Title from "../typography/Title.svelte";
  import Button from "../button/Button.svelte";
  import IconLink from "../button/IconLink.svelte";
  import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
  import type { Snippet } from "svelte";

  type Props = {
    title: string;
    icon: string;
    image?: any;
    links?: { icon: IconDefinition; href: string; label: string }[];
    cta?: { href: string; label: string };
    children?: Snippet;
  };

  let { title, icon, image, links = [], cta, children }: Props = $props();
</script>

<div class="flex md:flex-row flex-col-reverse my-8">
  <div class="flex flex-col flex-1 *:last:mt-auto">
    <div class="flex">
      <img src={icon} alt="" class="w-12 h-12 my-auto" />
      <Title tag="h2" class="ml-4">{title}</Title>
    </div>
    {@render children?.()}
    {#if links.length}
      <div class="flex md:flex-row flex-col flex-wrap md:space-x-5 my-8">
        {#each links as link}
          <IconLink icon={link.icon} href={link.href}>{link.label}</IconLink>
        {/each}
      </div>
    {/if}
    {#if cta}
      <div class="flex">
        <Button href={cta.href} external>{cta.label}</Button>
      </div>
    {/if}
  </div>
  {#if image}
    <div class="md:w-1/2 md:shrink-0 md:ml-8 mb-4 md:mb-0"><enhanced:img class="w-full h-auto" src={image} sizes="(min-width:768px) 50vw, 100vw" alt={"Screenshot " + title} /></div>
  {/if}
</div>
