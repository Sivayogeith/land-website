<script lang="ts">
  let props = $props();
</script>

<div class="carousel w-full rounded-2xl {props.class}">
  {#each props.images as image, i}
    <div id="slide{i}" class="carousel-item relative w-full">
      <img src={image} class="w-full" alt="" />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide{(i - 1 + props.images.length) % props.images.length}" class="btn btn-circle">❮</a>
        <a href="#slide{(i + 1) % props.images.length}" class="btn btn-circle">❯</a>
      </div>
    </div>
  {/each}
</div>
