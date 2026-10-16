<script lang="ts">
  import Container from "#lib/components/layout/Container.svelte";
  import Button from "#lib/components/button/Button.svelte";
  import { page } from "$app/state";
</script>

<Container padding fullHeight class="flex flex-col items-center justify-center text-center">
  <h1 class="font-gruene text-6xl text-secondary-600">{page.status}</h1>
  <p class="text-2xl pt-4">
    {page.status === 404 ? "Diese Seite existiert nicht." : (page.error?.message ?? "Es ist ein Fehler aufgetreten.")}
  </p>
  <div class="mt-8">
    <Button href="/">Zur Startseite</Button>
  </div>
</Container>
