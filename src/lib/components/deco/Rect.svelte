<script>
    let clazz = ""
    export {clazz as class}
</script>

<div class={`absolute top-0 right-0 -z-20 h-screen w-auto ${clazz}`}>
  <svg viewBox="0 0 1920 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" class="h-screen absolute top-0 right-0">
    <polygon points="1050,0 1920,0 1920,1080, 750,1080" class="fill-green" />
  </svg>
  <slot/>
</div>
