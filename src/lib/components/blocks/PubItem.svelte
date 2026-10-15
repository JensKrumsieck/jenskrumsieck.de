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

    const thumbs = import.meta.glob<{ default: any }>("/src/lib/assets/publications/*.{png,jpg,avif}", { eager: true, query: "?enhanced&w=112;56" });
  const originals = import.meta.glob<string>("/src/lib/assets/publications/*.{png,jpg,avif}", { eager: true, query: "?url", import: "default" });
  const thumb = $derived(image ? thumbs[`/src/lib/assets/publications/${image}`]?.default : undefined);
  type Part = { type: "text" | "em" | "strong" | "doi"; value: string };
  const parts = $derived(
    [
      names?.length ? { type: "text", value: names.join(", ") } : null,
      kind ? { type: "text", value: kind } : null,
      { type: "em", value: location },
      { type: "strong", value: date },
      edition ? { type: "em", value: edition } : null,
      pages ? { type: "text", value: pages } : null,
      isbn ? { type: "text", value: `ISBN: ${isbn}` } : null,
      doi ? { type: "doi", value: doi } : null,
    ].filter((part): part is Part => part !== null),
  );
  const original = $derived(image ? originals[`/src/lib/assets/publications/${image}`] : undefined);
</script>

<div class="my-4 bg-white px-4 py-2 rounded-lg shadow-lg">
  <div class="flex items-start gap-4">
    {#if thumb}
      <a href={original} target="_blank" rel="noopener noreferrer" class="w-12 h-12 shrink-0" title="Bild vergrößern"><enhanced:img src={thumb} alt={title} sizes="56px" class="object-contain rounded-md w-14 h-14 shrink-0 grow-0 bg-white" /></a>
    {/if}
    <div class="prose max-w-full">
      <div class="md:flex justify-between items-center">
        <h3 class="text-xl font-black text-secondary-600 mt-0 mb-0.5">
          {title}
        </h3>
      </div>
      {#each parts as part, i}{#if i > 0}, {/if}{#if part.type === "em"}<em>{part.value}</em>{:else if part.type === "strong"}<strong>{part.value}</strong>{:else if part.type === "doi"}DOI: <a class="font-secondary-600" href="https://doi.org/{part.value}">{part.value}</a>{:else}{part.value}{/if}{/each}.
    </div>
  </div>
</div>
