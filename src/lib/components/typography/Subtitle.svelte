<script>
  export let dense = false;
</script>

<h2
  class={`text-2xl font-black italic tracking-tightest ${dense ? "" : "my-6"}`}
>
  <slot />
</h2>
