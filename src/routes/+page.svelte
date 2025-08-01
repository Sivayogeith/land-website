<script>
  let { data } = $props();
</script>

<h2 class="text-3xl font-bold mb-8 text-primary-700">Our Plots</h2>

<div
  class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center"
>
  {#each data.plots as plot}
    <a
      href={"/" + plot.slug}
      class="block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={plot.image}
        alt={plot.title}
        class="2xl:w-[30rem] 2xl:h-[15rem] w-[25rem] h-[12rem] object-cover"
      />
      <div class="p-4">
        <h3 class="text-xl font-semibold text-primary-900">
          {plot.title}
        </h3>
      </div>
    </a>
  {/each}
</div>
