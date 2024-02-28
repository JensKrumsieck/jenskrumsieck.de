<script>
  export let title;
  export let institution;
  export let times;
  export let image;
  export let tags = undefined;
</script>

<div class="flex items-start my-6">
  <img
    src="/{image}"
    alt="logo"
    class="object-cover rounded-xl w-16 h-16 shrink-0"
  />
  <div class="w-full ml-10">
    <div class="flex justify-between">
      <div>
        <h2 class="text-2xl font-black italic tracking-tightest space-y-2">
          {title}
        </h2>
        <h3 class="italic text-xl">{institution}</h3>
        <h4 class="text-dark-green font-semibold text-md">{@html times}</h4>
        <div class="my-2 text-lg">
          <slot />
        </div>
        <div class="flex flex-row flex-wrap">
          {#if tags}
            {#each tags as tag}
              <div class="text-sm text-dark rounded-lg bg-gray py-1 px-1 mr-2 mb-1">
                {tag}
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
