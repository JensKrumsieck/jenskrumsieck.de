<script>
  // provided by <Modals />
  export let isOpen;
  export let content;
</script>

{#if isOpen}
  <div
    role="dialog"
    class="z-[100] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none p-8 flex-col"
  >
    <div class="bg-white flex p-8 rounded flex-col items-end">
      {@html content}
    </div>
  </div>
{/if}
