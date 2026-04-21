<script lang="ts">
  type Props = {
    title: string;
    names?: string[];
    location: string;
    date: string;
    kind?: string;
    edition?: string;
    pages?: string;
    doi?: string;
    isbn?: string;
    image?: string;
  };

  let { title, names, location, date, kind, edition, pages, doi, isbn, image }: Props = $props();
</script>

<div class="my-4 bg-white px-4 py-2 rounded-lg shadow-lg">
  <div class="flex items-start gap-4">
    {#if image}
      <a href={image} target="_blank" class="w-12 h-12 shrink-0" title="Bild vergrößern"><enhanced:img src={image} alt={title} class="object-contain rounded-md w-14 h-14 shrink-0 grow-0 bg-white" /></a>
    {/if}
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
