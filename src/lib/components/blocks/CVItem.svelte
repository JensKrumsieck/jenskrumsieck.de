<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    title: string;
    institution: string;
    times: string;
    image: string;
    tags?: string[];
    children?: Snippet;
  };

  let { title, institution, times, image, tags = undefined, children }: Props = $props();
</script>

<div class="my-4 bg-white px-4 py-2 rounded-lg shadow-lg">
  <div class="flex items-start gap-4">
    <img src="/{image}" alt="logo" class="object-contain rounded-md w-10 h-10 shrink-0 bg-white" />
    <div class="w-full">
      <div class="md:flex justify-between items-center">
        <h4 class="text-xl font-black text-secondary-600">
          {title}
        </h4>
        <p class="text-sm md:rounded-full md:bg-primary-50 border-primary-500 text-black md:border-1 md:px-1.5 md:py-0.5">{@html times}</p>
      </div>
      <h5 class="italic text-md">{institution}</h5>

      <div class="my-1">
        {@render children?.()}
      </div>
      <div class="flex flex-row flex-wrap mt-2">
        {#if tags}
          {#each tags as tag}
            <div class="text-sm text-dark rounded-full bg-neutral-200 border-1 border-neutral-400 px-1.5 py-0.5 mr-2 mb-1">
              {tag}
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
