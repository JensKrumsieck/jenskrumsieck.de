<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    tag?: string;
    primary?: boolean;
    class?: string;
    children?: Snippet;
  };

  let { tag = "h2", primary = false, class: clazz = "", children }: Props = $props();
</script>

<svelte:element this={tag} class={`text-2xl font-gruene ${primary ? "text-primary-600" : ""} ${clazz}`}>
  {@render children?.()}
</svelte:element>
