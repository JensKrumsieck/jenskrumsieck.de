<script lang="ts">
  import Button from "$lib/components/button/Button.svelte";

  type Props = { html: string; host: string; class?: string };

  let { html, host, class: clazz = "" }: Props = $props();
  let loaded = $state(false);
</script>

{#if loaded}
  {@html html}
{:else}
  <div class="flex flex-col items-center justify-center gap-4 rounded-lg bg-neutral-200 border border-neutral-400 p-6 mb-8 text-center {clazz}">
    <p>
      Dieser Inhalt wird von <strong>{host}</strong> bereitgestellt. Wenn Sie ihn laden, wird Ihre IP-Adresse an den Anbieter übertragen.
    </p>
    <button type="button" onclick={() => (loaded = true)}>
      <Button span>Inhalt laden</Button>
    </button>
    <a href="/privacy#drittinhalte" class="text-sm underline">Mehr dazu in der Datenschutzerklärung</a>
  </div>
{/if}
