<script>
  export let right = false;
  export let opaque = false;

  let clazz = "";
  export { clazz as class };
</script>

<div
  class={`absolute h-[90%] w-[90%] bg-no-repeat top-0 
  ${right ? "bg-right" : ""} 
  ${opaque ? "" : "opacity-20"}
  ${clazz}`}
  style={`background-image: url(/hex.svg);`}
/>
