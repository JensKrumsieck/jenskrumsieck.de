<script>
import Container from "./Container.svelte";
import NavLink from "./NavLink.svelte";

</script>
<nav>
    <Container class="flex flex-wrap justify-between py-5">
        <div class="logo">
            <a href="/" class="flex block">
                <img src="/logo.svg" alt="Logo" />
                <span class="text-5xl font-black italic mx-3 tracking-tightest">Jens Krumsieck</span>
            </a>
        </div>
        <div class="font-semibold w-full items-center md:w-auto text-xl" id="mainMenu">
            <ul class="flex navbar">                
                <NavLink href="/">Home</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/publications">Veröffentlichungen</NavLink>
                <NavLink href="/about">Über Mich</NavLink>
            </ul>
        </div>
    </Container>
</nav>