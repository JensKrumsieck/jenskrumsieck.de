<script>
  export let href;
  export let bold = false;
</script>

<a
  {href}
  class="flex hover:text-secondary-600 mt-4 text-lg"
  class:font-bold={bold}
>
  <slot />
</a>
