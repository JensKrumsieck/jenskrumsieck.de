<script lang="ts">
  import type { Snippet } from "svelte";
  import Container from "./Container.svelte";
  import Title from "../typography/Title.svelte";

  type Props = {
    title?: string;
    class?: string;
    children?: Snippet;
  };

  let { title, class: clazz = "my-12", children }: Props = $props();
</script>

<Container padding class={clazz}>
  {#if title}
    <Title>{title}</Title>
  {/if}
  {@render children?.()}
</Container>
