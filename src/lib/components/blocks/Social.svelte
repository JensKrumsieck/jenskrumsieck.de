<script>
  import { faGithub, faInstagram, faResearchgate, faOrcid, faYoutube, faXing, faLinkedin, faTiktok} from "@fortawesome/free-brands-svg-icons";
  import RoundIconButton from "../button/RoundIconButton.svelte";
  let clazz = "";
  export { clazz as class };
</script>

<div class={clazz + "md:space-y-0 space-y-2"}>
    <RoundIconButton href="https://www.linkedin.com/in/jenskrumsieck" icon={faLinkedin} />
    <RoundIconButton href="https://www.xing.com/profile/Jens_Krumsieck" icon={faXing} />
    <RoundIconButton href="https://github.com/JensKrumsieck" icon={faGithub} />
    <RoundIconButton href="https://www.researchgate.net/profile/Jens-Krumsieck" icon={faResearchgate} />
    <RoundIconButton href="https://orcid.org/0000-0001-6242-5846" icon={faOrcid} />
    <RoundIconButton href="https://instagram.com/jens.ation/" icon={faInstagram} />
</div>
