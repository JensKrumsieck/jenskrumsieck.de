<script>
  export let dark = false;
</script>

<div class="logo">
  <a href="/" class="flex">
    {#if dark}<img src="/logo_dark.svg" alt="Logo" />
    {:else}<img src="/logo.svg" alt="Logo" />
    {/if}
    <span
      class="text-5xl font-gruene mx-3 tracking-tightest sm:flex hidden"
      >Jens Krumsieck</span
    >
  </a>
</div>
