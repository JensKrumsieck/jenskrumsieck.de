<script>
  import { faFacebook } from "@fortawesome/free-brands-svg-icons";
  import Button from "$lib/components/button/Button.svelte";
  import RoundIconButton from "$lib/components/button/RoundIconButton.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Rect from "$lib/components/deco/Rect.svelte";
</script>

<Rect>
  <img
    src="hero.png"
    alt="Jens in seinem Labor"
    class="ml-auto mix-blend-multiply max-h-full w-auto"
  />
</Rect>
<Container class="h-screen" padding>
  <div class="flex">
    <div class="col">
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
      </p>
      <Button external>Hello Welt</Button>
      <Button outlined>Hallo Welt</Button>
      <RoundIconButton icon={faFacebook} />
    </div>
  </div>
</Container>
