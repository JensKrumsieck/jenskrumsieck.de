<script>
  export let white = false;
</script>

<h1
  class={`text-5xl md:text-6xl font-black italic tracking-tightest text-shadow-copy my-5 ${
    white ? "text-white" : ""
  }`}
>
  <slot />
</h1>

<style>
  .text-shadow-copy {
    text-shadow: 0.5rem 0.5rem 0px theme("colors.green");
  }
  @screen md {
    .text-shadow-copy {
      text-shadow: 1rem 1rem 0px theme("colors.green");
    }
  }
</style>
