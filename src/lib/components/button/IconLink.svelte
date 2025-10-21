<script>
  import Fa from "svelte-fa";

  export let href = "";
  export let icon;
</script>

<a {href} class="font-bold italic flex hover:text-dark-green text-lg">
    <Fa {icon} size="lg" class="mr-2" />
    <slot/>
</a>