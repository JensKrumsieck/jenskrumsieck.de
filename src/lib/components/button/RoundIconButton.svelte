<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
  import Fa from "svelte-fa";

  type Props = {
    href: string;
    icon: IconDefinition;
  };

  let { href, icon }: Props = $props();
</script>

<a {href} class="m-1 inline-flex items-center justify-center rounded-full bg-transparent border-secondary-600 text-secondary-600 border p-2 hover:bg-secondary-600 hover:text-white mx-0.5" title={icon.iconName}>
  <div class="w-4 h-4 flex justify-center items-center">
    <Fa {icon} size="lg" />
  </div>
</a>
