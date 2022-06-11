<script>
    let clazz = ""
	export { clazz as class };
</script>

<div class={`container mx-auto ${clazz || ''}`}>
    <slot/>
</div>