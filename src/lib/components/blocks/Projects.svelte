<script>
  import Button from "$lib/components/button/Button.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  export let title;
  export let icon;
  export let image = "";
</script>

<div class="flex md:flex-row flex-col-reverse my-8">
  <div class="flex flex-col">
    <div class="flex">
      <img src={icon} alt={"Logo " + title} class="w-12" />
      <Title class="ml-4">{title}</Title>
    </div>
   <slot/>
  </div>
  {#if image != ""}
    <img
      class="md:max-w-[50%] h-fit md:ml-8"
      src={image}
      loading="lazy"
      alt=" Screenshot"
    />
  {/if}
</div>
