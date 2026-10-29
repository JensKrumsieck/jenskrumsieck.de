<script lang="ts">
  import { faGithub, faInstagram, faResearchgate, faOrcid, faLinkedin } from "@fortawesome/free-brands-svg-icons";
  import RoundIconButton from "../button/RoundIconButton.svelte";

  type Props = {
    class?: string;
  };

  let { class: clazz = "" }: Props = $props();
</script>

<div class={`${clazz} md:space-y-0 space-y-2`}>
  <RoundIconButton href="https://instagram.com/jens.ation/" icon={faInstagram} label="Instagram" />
  <RoundIconButton href="https://www.linkedin.com/in/jenskrumsieck" icon={faLinkedin} label="LinkedIn" />
  <RoundIconButton href="https://github.com/JensKrumsieck" icon={faGithub} label="GitHub" />
  <RoundIconButton href="https://www.researchgate.net/profile/Jens-Krumsieck" icon={faResearchgate} label="ResearchGate" />
  <RoundIconButton href="https://orcid.org/0000-0001-6242-5846" icon={faOrcid} label="ORCID" />
</div>
