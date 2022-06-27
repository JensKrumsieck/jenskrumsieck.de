<script>
  import Fa from "svelte-fa/src/fa.svelte";

  export let href = "";
  export let icon;
</script>

<a {href} class="block relative top-1 items-center justify-center rounded-full bg-gray inline-flex p-3 hover:bg-dark-green hover:text-white mx-0.5 " title={icon.iconName}>
  <div class="w-5 h-5 flex justify-center">
    <Fa {icon} size="lg" />
  </div>
</a>
