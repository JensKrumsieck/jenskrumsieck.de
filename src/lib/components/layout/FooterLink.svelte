<script>
  export let href;
  export let bold = false;
</script>

<a
  {href}
  class="flex hover:text-dark-green"
  class:font-bold={bold}
  class:mt-4={bold}
  class:text-lg={bold}
>
  <slot />
</a>
