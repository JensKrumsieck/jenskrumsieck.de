<script lang="ts">
  export let title;
  export let names: string[] | undefined = [];
  export let location;
  export let date;
  export let kind: string | undefined = undefined;
  export let edition: string | undefined = undefined;
  export let pages: string | undefined = undefined;
  export let doi: string | undefined = undefined;
  export let isbn: string | undefined = undefined;
  export let image: string | undefined = undefined;
</script>

<div class="my-4 bg-white px-4 py-2 rounded-lg shadow-lg">
  <div class="flex items-start gap-4">
    {#if image}<a href={image} target="_blank"><img src={image} alt={title} class="object-contain rounded-md w-10 h-10 shrink-0 bg-white" /></a>{/if}
    <div class="prose max-w-full">
      <div class="md:flex justify-between items-center">
        <h3 class="text-xl font-black text-secondary-600 mt-0 mb-0.5">
          {title}
        </h3>
      </div>
      {#each names as name}{name},&nbsp;{/each}
      {#if kind}{kind},{/if}
      <em>{location}</em>, 
      <strong>{date}</strong>,
      {#if edition}<em>{edition}</em>,{/if}
      {#if pages}{pages},{/if}
      {#if isbn}ISBN: {isbn}{/if}
      {#if doi}DOI: <a class="font-secondary-600" href="https://doi.org/{doi}">{doi}</a>{/if}.
    </div>
  </div>
</div>
