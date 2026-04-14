<script>
  // @ts-nocheck

  import Badge from "$lib/components/typography/Badge.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Image from "$lib/components/layout/Image.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import * as prismic from "@prismicio/client";
  import dayjs from "dayjs";
  import PrismicImage from "$lib/components/prismic/PrismicImage.svelte";
  import PubItem from "$lib/components/blocks/PubItem.svelte";
  export let data;
  let { publications } = data;
</script>

<Container padding class="my-12">
  <Title>Veröffentlichungen</Title>
  <h2 class="py-4 text-2xl font-gruene">Bücher</h2>
  <PubItem
    image="/buch_thumb.png"
    title="PorphyStruct: Entwicklung einer Software zur quantitativen Bestimmung nicht-planarer Auslenkungen von porphyrinoiden Makrozyklen & Synthese neuer Metallkomplexe von Isoporphyrin-Liganden"
    names={["J. Krumsieck"]}
    kind="Dissertation an der TU Braunschweig"
    location="Verlag Dr. Hut, München"
    date="2024"
    isbn="978-3-8439-5446-4"
  />

  <h2 class="py-4 text-2xl font-gruene">Beiträge in Publikationsorganen mit wissenschaftlicher Qualitätsprüfung</h2>
  <PubItem title="Do Corroles Stabilize Tetravalent Antimony?" names={["S. Eulberg", "N. Schulze", "J. Krumsieck", "N. Klein", "M. Bröring"]} location="Angew. Chem. Int. Ed." edition="62" date="2023" pages="e202306598" doi="10.1002/anie.202306598" />
  <PubItem
    title="PorphyStruct – A Digital Tool for the Quantitative Assignment of Non-Planar Distortion Modes in Four-Membered Porphyrinoids"
    names={["J. Krumsieck", "M. Bröring"]}
    location="Chem. Eur. J."
    edition="27"
    date="2021"
    pages="11580-11588"
    doi="10.1002/chem.202101243"
  />
  <PubItem
    title="Zinc- and Cadmium meso-Aryl-Isoporphyrins: Non-Aromatic NIR Dyes with Distinct Conformational Features"
    names={["Ç. Baş", "J. Krumsieck", "W.-D. Möller", "D. Körner", "M. Bröring"]}
    location="Chem. Eur. J."
    edition="27"
    date="2021"
    pages="8021 – 8029"
    doi="10.1002/chem.202100686"
  />
  <PubItem
    title="Metal‐Assisted One‐Pot Synthesis of Isoporphyrin Complexes"
    names={["P. Schweyen", "M. Hoffmann", "J. Krumsieck", "B. Wolfram", "X. Xie", "M. Bröring"]}
    location="Angew. Chem. Int. Ed."
    edition="55"
    date="2016"
    pages="10118"
    doi="10.1002/anie.201604297"
  />

  <h2 class="py-4 text-2xl font-gruene">Tagungsbeiträge</h2>
  <PubItem
    title="SciWIn-Client and SciWIn-Studio: Simplifying FAIR Computational Workflows"
    names={["J. Krumsieck", "A. Leidel", "P. König", "H. von Waldow"]}
    kind="Vortrag"
    location="FAIRagro Community Summit in Frankfurt am Main"
    date="05.03.2026 - 06.03.2026"
    doi="10.5281/zenodo.19060805"
  />
  <PubItem
    title="FAIR, fast, and frictionless – computational workflows with SciWIn"
    names={["J. Krumsieck", "A. Leidel", "X. Stiensmeier", "H. von Waldow"]}
    kind="Poster"
    location="DataDays Niedersachsen in Braunschweig"
    date="24.11.2025 - 25.11.2025"
    doi="10.5281/zenodo.17651648"
  />
  <PubItem
    title="Easy creation of reproducible computational workflows with SciWIn-Client"
    names={["J. Krumsieck", "A. Leidel", "P. König", "H. von Waldow"]}
    kind="Vortrag"
    location="2nd Conference on Research Data Infrastructure (CoRDI) in Aachen"
    date="26.08.2025 - 28.08.2025"
    doi="10.5281/zenodo.17119086"
  />
  <PubItem
    title="SciWIn Client: Reproducible computational workflows made easy"
    names={["J. Krumsieck", "A. Leidel", "P. König", "H. von Waldow"]}
    kind="Poster"
    location="FAIRagro Plenary in Berlin"
    date="13.11.2024 - 15.11.2024"
    doi="10.5281/zenodo.14098277"
  />
  <PubItem
    title="Boosting Scientific Reusability: A Concept for a FAIR Scientific Workflow Infrastructure"
    names={["J. Krumsieck", "A. Leidel", "P. König", "H. von Waldow", "F. Hoedt"]}
    kind="Vortrag"
    location="FAIRagro Community Summit in Berlin"
    date="17.06.2024 - 18.06.2024"
    doi="10.5281/zenodo.12743569"
  />
  <PubItem
    title="Boosting Scientific Reusability: A Concept for a FAIR Scientific Workflow Infrastructure"
    names={["A. Leidel", "J. Krumsieck", "P. König", "H. von Waldow", "F. Hoedt"]}
    kind="Poster"
    location="FAIRagro Community Summit in Berlin"
    date="17.06.2024 - 18.06.2024"
    doi="10.5281/zenodo.11619214"
  />
  <PubItem title="PorphyStruct - Structural Analysis of Porphyrinoids" names={["J. Krumsieck", "M. Bröring"]} kind="Poster" location="JCF JungChemikerTagung in Braunschweig" date="20.04.2023" doi="10.5281/zenodo.17657642" />
  <PubItem
    title="PorphyStruct - Structural Analysis of Porphyrinoids"
    names={["J. Krumsieck", "M. Bröring"]}
    kind="Poster"
    location="International Conference on Porphyrins and Phtalocyanines (ICPP-12) in Madrid"
    date="10.07.2022 - 15.07.2022"
    doi="10.5281/zenodo.17657642"
  />
  <PubItem
    title="Metalloisoporphyrins"
    names={["J. Krumsieck", "Ç. Baş", "J. Rusche", "C. Knaus", "W.-D. Möller", "N. Schulze", "D. Körner", "M. Bröring"]}
    kind="Poster"
    location="Koordinationschemietagung (KCT) in Jena"
    date="07.09.2022 - 09.09.2022"
  />
  <PubItem
    title="Metalloisoporphyrins"
    names={["J. Krumsieck", "Ç. Baş", "J. Rusche", "C. Knaus", "W.-D. Möller", "N. Schulze", "D. Körner", "M. Bröring"]}
    kind="Poster"
    location="International Conference on Porphyrins and Phtalocyanines (ICPP-12) in Madrid"
    date="10.07.2022 - 15.07.2022"
  />
  <PubItem title="Isoporphyrin – Ein neues Sternbild am Porphyrin-Himmel" names={["J. Krumsieck"]} kind="Vortrag" location="Tag der Chemie in Braunschweig" date="29.06.2022" />
  <PubItem title="Metallkomplexe von Isoporphyrin-Liganden" names={["J. Krumsieck", "Ç. Baş", "M. Bröring"]} kind="Poster" location="JCF JungChemikerTagung in Braunschweig" date="10.10.2019" />
  <PubItem title="Isoporphyrine - Von der Natur inspirierte NIR-Farbstoffe" names={["J. Krumsieck"]} kind="Vortrag" location="Absolventenfeier TU Braunschweig" date="23.11.2018" />
  <PubItem title="Cobalt Isoporphyrins" names={["J. Krumsieck", "Ç. Baş", "P. Schweyen", "M. Bröring"]} kind="Poster" location="Norddeutsches Doktoranden Kolloquuium (NDDK) in Braunschweig" date="03.09.2018 - 04.09.2018" />
  <PubItem title="Cobalt Isoporphyrins" names={["J. Krumsieck", "Ç. Baş", "P. Schweyen", "M. Bröring"]} kind="Poster" location="International Conference on Porphyrins and Phtalocyanines (ICPP-10) in München" date="01.07.2018 - 06.07.2018" />
</Container>
