<script>
  import Fa from "svelte-fa";

  export let href = "";
  export let icon;
</script>

<a
  {href}
  class="m-1 inline-flex items-center justify-center rounded-full bg-transparent border-secondary-600 text-secondary-600 border p-2 hover:bg-secondary-600 hover:text-white mx-0.5"
  title={icon.iconName}
>
  <div class="w-4 h-4 flex justify-center items-center">
    <Fa {icon} size="lg" />
  </div>
</a>
