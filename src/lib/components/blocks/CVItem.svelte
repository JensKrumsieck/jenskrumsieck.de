<script>
  import Subtitle from "../typography/Subtitle.svelte";

  export let title;
  export let institution;
  export let times;
  export let image;
</script>

<div class="py-12 relative">
  <div class="absolute bg-dark-green w-2 h-full md:ml-1 md:left-16 left-11 top-0 z-[-1]" />
  <div class="flex space-x-12">
    <img
      src={image}
      alt="logo"
      class="object-cover md:w-36 md:h-36 w-24 h-24 rounded-full"
    />
    <div class="flex flex-col space-y-2">
      <h2 class="md:text-5xl text-3xl font-black italic tracking-tightest">
        {title}
      </h2>
      <h3 class="italic md:text-3xl text-2xl">{institution}</h3>
      <h4 class="font-light">{times}</h4>
      <slot />
    </div>
  </div>
</div>
