

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
          <li>Gesellschaft Deutscher Chemiker (GDCh) (<em>seit 2018</em>)</li>
          <li>Bündnis 90/Die GRÜNEN (<em>seit 2021</em>)</li>
          <li>Allgemeiner Deutscher Fahrrad Club (ADFC) (<em>seit 2022</em>)</li>
        </ul>
        <div class="mt-4">
          <Button href="/cv">Lebenslauf</Button>
        </div>
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
  <div class="flex md:flex-row flex-col md:space-x-48 text-lg">
    <div>
      <p class="mt-12 font-bold text-xl">Hi, ich bin Jens!</p>
      <p class="my-6">
        Ich promoviere aktuell in <strong>Bioanorganischer Chemie</strong> an der
        Technischen Universität Braunschweig in der Arbeitsgruppe von Prof. Dr. Martin
        Bröring. Ich beschäftige mich mit Porphyrinoiden und ähnlichen Verbindungen,
        deren Strukturmotiv wir uns von der Natur geborgt haben. Die bekanntesten
        Vertreter sind Häm (roter Blutfarbstoff) und Chlorophyll (grüner Pflanzenfarbstoff).
      </p>
      <p class="my-6">
        Neben der Wissenschaft gehören die Entwicklung von Software und Politik
        zu meinen Interessen. Begonnen hat meine Faszination für
        Softwareentwicklung als ich in der 7. Klasse einen programmierbaren
        Taschenrechner bekommen habe.
      </p>
      <p class="my-6">
        Seit 2021 bin ich Mitglied bei
        <strong>Bündnis 90/Die GRÜNEN</strong> und bin besonders an Themen wie Digitalisierung,
        Mobilität, Klimaschutz und Energiewende interessiert.
      </p>
      <p class="mb-12">Schau dich gerne auf meiner Website um 😉</p>
      <Button href="/cv">Lebenslauf</Button>
      <div class="my-12">
        <Social />
      </div>
    </div>
    <figure class="w-full h-auto my-auto">
      <img src="lowersax.svg" alt="Ein Bild von Jens" loading="lazy" />
    </figure>
  </div>
</Container>
