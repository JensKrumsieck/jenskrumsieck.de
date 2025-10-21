<script>
  import * as prismic from "@prismicio/client";
  export let slice;
  let item = slice.primary.content;
  const linkResolver = (doc) => {
    if (doc.type === "article") {
      return `/blog/${doc.uid}/`;
    } else {
      return `/publications/${doc.uid}`;
    }
  };

  function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}
</script>
<section class="prose max-w-none prose-lg prose-a:text-dark-green hover:prose-a:text-dark">
    <a href="{prismic.asLink(item, linkResolver)}">{makeTitle(item.slug)}</a>
</section>

