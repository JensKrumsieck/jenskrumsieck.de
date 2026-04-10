<script>
  import dayjs from "dayjs";

  import Social from "../blocks/Social.svelte";
  import Container from "./Container.svelte";
  import FooterLink from "./FooterLink.svelte";
  import Logo from "./Logo.svelte";
</script>

<div class="bg-secondary-200 text-white py-12 mt-12">
  <Container padding>
    <Logo />
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row flex-wrap gap-x-4">
        <FooterLink bold href="/">Start</FooterLink>
        <FooterLink bold href="/blog">Beiträge</FooterLink>
        <FooterLink bold href="/about">Über Mich</FooterLink>
        <FooterLink href="/impressum">Impressum</FooterLink>
        <FooterLink href="/privacy">Datenschutzerklärung</FooterLink>
        <FooterLink href="https://gruene-braunschweig.de/">B'90/DIE GRÜNEN Braunschweig</FooterLink>
      </div>

      <nav class="bg-secondary-200">
        <Container class="flex justify-end ">
          <Social />
        </Container>
      </nav>
    </div>
    <p class="text-center mt-8 font-sm italic">
      &copy; 2021 - {dayjs().format("YYYY")} - Jens Krumsieck
    </p>
    <p class="text-center mb-8 font-sm italic">Made with ♥️ in Braunschweig</p>
  </Container>
</div>
