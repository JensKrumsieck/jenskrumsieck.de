<script>
  import { faGithub, faTwitter, faInstagram, faResearchgate, faOrcid, faYoutube, faXing, faLinkedin} from "@fortawesome/free-brands-svg-icons";
  import RoundIconButton from "../button/RoundIconButton.svelte";
  let clazz = "";
  export { clazz as class };
</script>

<div class={clazz}>
    <RoundIconButton href="https://instagram.com/jens.ation/" icon={faInstagram} />
    <RoundIconButton href="https://twitter.com/jens_ation/" icon={faTwitter} />
    <RoundIconButton href="https://github.com/JensKrumsieck" icon={faGithub} />
    <RoundIconButton href="https://youtube.com/c/JensKrumsieck" icon={faYoutube} />
    <RoundIconButton href="https://www.researchgate.net/profile/Jens-Krumsieck" icon={faResearchgate} />
    <RoundIconButton href="https://orcid.org/0000-0001-6242-5846" icon={faOrcid} />
    <RoundIconButton href="https://www.xing.com/profile/Jens_Krumsieck" icon={faXing} />
    <RoundIconButton href="'https://www.linkedin.com/in/jens-krumsieck-849445211" icon={faLinkedin} />
</div>
