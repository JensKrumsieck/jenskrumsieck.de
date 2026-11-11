<script lang="ts">
  import Date from "./Date.svelte";
  import Fa from "svelte-fa";
  import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
  import { getDesc } from "#lib/util/text-helpers.js";

  type Props = {
    post: any;
  };

  let { post }: Props = $props();
</script>

<a href={post.permalink} target="_blank" rel="noopener noreferrer" class="group relative block break-inside-avoid rounded-lg shadow-lg overflow-hidden">
  <img class="w-full rounded-lg group-hover:scale-105 transition-transform duration-300" src={post.image_url} alt={post.alt_text || getDesc(post.caption ?? "", 125)} loading="lazy" decoding="async" />
  <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent pt-8 pb-3 px-3 flex items-center justify-between text-white text-sm">
    <Date date={post.timestamp} />
    <div class="flex items-center gap-3">
      <span class="flex items-center gap-1"><Fa icon={faHeart} />{post.like_count}</span>
      <span class="flex items-center gap-1"><Fa icon={faComment} />{post.comments_count}</span>
    </div>
  </div>
</a>
