<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    class?: string;
    children?: Snippet;
  };

  let { class: clazz = "", children }: Props = $props();
</script>

<article class={`prose max-w-none prose-lg prose-a:text-dark-green hover:prose-a:text-dark ${clazz}`}>
  {@render children?.()}
</article>
