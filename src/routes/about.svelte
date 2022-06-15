<script>
  import Social from "$lib/components/blocks/Social.svelte";
  import Button from "$lib/components/button/Button.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
</script>

<div
  class="wrapper bg-cover bg-no-repeat bg-top"
  style="background-image: url(lastenrad.jpg);"
>
  <Container class="flex md:flex-row flex-col" padding fullHeight nav>
    <div class="flex flex-col md:max-w-[40%] justify-end">
      <LargeTitle>Über Mich</LargeTitle>
      <div class="bg-white mt-12 px-12 py-24 text-lg">
        <strong>Kurz & Knackig</strong>
        <ul class="my-4">
          <li>Geboren 1992 in Göttingen</li>
          <li>Aufgewachsen in Uslar (LK Northeim)</li>
          <li>Studiert in Braunschweig</li>
        </ul>
        <ul class="my-4">
          <li><strong>Abitur 2011</strong> - <em>Gymnasium Uslar</em></li>
          <li>
            <strong>Bachelor 2016</strong> - <em>TU Braunschweig</em> (Lehramt Chemie/Mathe)
          </li>
          <li>
            <strong>Master 2018</strong> - <em>TU Braunschweig</em> (Chemie, mit
            Auszeichnung)
          </li>
          <li>
            <strong>Promotion vsl. 2022/23</strong> - <em>TU Braunschweig</em> (Anorganische
            Chemie)
          </li>
        </ul>
        <ul class="my-4">
          <li>
            <strong>Seit 2018</strong> - Wissenschaftlicher Mitarbeiter (<em
              >TU Braunschweig</em
            >)
          </li>
        </ul>
        <strong>Mitgliedschaften</strong>
        <ul>
          <li>Gesellschaft Deutscher Chemiker (<em>seit 2018</em>)</li>
          <li>Bündnis 90/Die GRÜNEN (<em>seit 2021</em>)</li>
          <li>ADFC (<em>seit 2022</em>)</li>
        </ul>
      </div>
    </div>
    <div class="flex self-end ml-auto">
      <div class="bg-white rounded p-1 text-xs my-1 opacity-50">
        &copy; Leonore Köhler
      </div>
    </div>
  </Container>
</div>

<Container padding class="my-12">
  <div class="flex md:flex-row flex-col md:space-x-48">
    <div>
      <p class="my-12">
        Jens Krumsieck is a german chemist passionate about porphyrinoids and
        related compounds. Porphyrinoids are can be found in a variety of
        proteins. The best-known example of these kind of tetrapyrrolic
        macrocycles is heme b which can be found in hemoglobin, the red blood
        pigment. Jens Krumsieck is currently a research associate at TU
        Braunschweig in Martin Brörings Group working on Metalcomplexes of
        Isoporphyrins. He later started PorphyStruct as a side-project -
        PorphyStruct a digital tool for the investigation of non-planar
        distortion modes of a variety of porphyrinoids.
      </p>
      <Button href="/cv">Lebenslauf</Button>
      <div class="my-12">
        <Social />
      </div>
    </div>
    <figure class="w-full h-auto">
      <img src="lowersax.svg" alt="Ein Bild von Jens" />
    </figure>
  </div>
</Container>
