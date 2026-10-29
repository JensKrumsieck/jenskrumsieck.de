<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    href: string;
    class?: string;
    children?: Snippet;
  };

  let { href, class: clazz = "", children }: Props = $props();
</script>

<a {href} class={`justify-end self-end mt-4 font-bold text-xl hover:text-secondary-500 ${clazz}`}>
  {@render children?.()} &rArr;
</a>
