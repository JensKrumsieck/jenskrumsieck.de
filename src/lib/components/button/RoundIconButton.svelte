<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
  import Fa from "svelte-fa";

  type Props = {
    href: string;
    icon: IconDefinition;
    label: string;
  };

  let { href, icon, label }: Props = $props();
</script>

<!-- rel="me": the linked profiles belong to the site owner -->
<a {href} rel="me" aria-label={label} class="m-1 inline-flex items-center justify-center rounded-full bg-transparent border-secondary-600 text-secondary-600 border p-2 hover:bg-secondary-600 hover:text-white mx-0.5" title={label}>
  <div class="w-4 h-4 flex justify-center items-center">
    <Fa {icon} size="lg" />
  </div>
</a>
