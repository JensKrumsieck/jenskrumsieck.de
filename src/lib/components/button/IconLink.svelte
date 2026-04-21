<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
  import type { Snippet } from "svelte";
  type Props = {
    href?: string;
    icon: IconDefinition;
    children?: Snippet;
  };
  import Fa from "svelte-fa";

  let { href = "", icon, children }: Props = $props();
</script>

<a {href} class="font-bold italic flex hover:text-dark-green text-lg">
  <Fa {icon} size="lg" class="mr-2" />
  {@render children?.()}
</a>
