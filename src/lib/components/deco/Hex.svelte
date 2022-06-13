<script>
  export let right = false;
</script>

<div
  class="absolute h-[90%] w-[90%] bg-no-repeat opacity-20 top-0 z-0"
  style={`background-image: url(/hex.svg); ${
    right ? "background-position: right; opacity:1;" : ""
  }`}
/>
