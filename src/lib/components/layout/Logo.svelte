<script>
  export let dark = false;
</script>

<div class="logo">
  <a href="/" class="flex items-center">
    {#if dark}<img src="/logo_dark.svg" alt="Logo" class="w-12" />
    {:else}<img src="/logo.svg" alt="Logo" class="w-12" />
    {/if}
    <span
      class="text-4xl font-gruene mx-3 sm:flex hidden text-secondary-600"
      >Dr. Jens Krumsieck</span
    >
  </a>
</div>
