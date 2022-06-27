<script>
  import dayjs from "dayjs";
  import { now } from "svelte/internal";

  import Social from "../blocks/Social.svelte";
  import Hr from "../deco/HR.svelte";
  import Container from "./Container.svelte";
  import FooterLink from "./FooterLink.svelte";
  import Logo from "./Logo.svelte";
</script>

<div class="bg-dark text-white py-12 mt-12">
  <Container padding>
    <Logo dark />
    <div class="grid md:grid-cols-3 md:gap-4 my-12">
      <div class="flex flex-col">
        <FooterLink bold href="/">Home</FooterLink>
        <FooterLink bold href="/blog">Blog</FooterLink>
        <FooterLink bold href="/publications">Veröffentlichungen</FooterLink>
        <FooterLink bold href="/about">Über Mich</FooterLink>
        <FooterLink href="/cv">Lebenslauf</FooterLink>
        <p class="flex text-lg pt-4 font-bold">Rechtliches</p>
        <FooterLink href="/impressum">Impressum</FooterLink>
        <FooterLink href="/privacy">Datenschutzerklärung</FooterLink>
      </div>
      <div class="flex flex-col">
        <p class="flex text-lg pt-4 font-bold">Projekte</p>
        <FooterLink href="https://porphystruct.org">PorphyStruct</FooterLink>
        <FooterLink href="https://chn.jenskrumsieck.de">CHN Tool</FooterLink>
        <FooterLink href="https://github.com/jenskrumsieck/chemsharp/"
          >ChemSharp</FooterLink
        >
        <p class="flex text-lg pt-4 font-bold">Links</p>
        <FooterLink href="https://tu-braunschweig.de">
          TU Braunschweig
        </FooterLink>
        <FooterLink href="https://gruene-braunschweig.de/">
          B'90/DIE GRÜNEN Braunschweig
        </FooterLink>
      </div>
      <div class="text-dark self-end">
        <Social />
      </div>
    </div>
    <Hr />
    <p class="text-center mt-8 font-sm italic">
      &copy; 2021 - {dayjs().format("YYYY")} - Jens Krumsieck
    </p>
    <p class="text-center mb-8 font-sm italic">
      Made with
      <a
        href="https://kit.svelte.dev/"
        class="text-light-green hover:underline"
      >
        SvelteKit
      </a>,
      <a
        href="https://tailwindcss.com/"
        class="text-light-green hover:underline"
      >
        TailwindCSS
      </a>
      &
      <a href="https://prismic.io/" class="text-light-green hover:underline">
        Prismic
      </a>
      hosted on
      <a href="http://vercel.com/" class="text-light-green hover:underline">
        Vercel
      </a>
    </p>
  </Container>
</div>
