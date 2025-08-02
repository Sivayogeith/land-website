<script>
  // @ts-nocheck

  import Carousel from "../components/Carousel.svelte";

  const { data } = $props();
  let city = $state("samayapuram");
  let plots = $state();
  const onCity = () => {
    plots = data.plots.filter((plot) => plot.city == city);
  };
  $effect(() => onCity());
</script>

<h2 class="text-3xl font-bold mb-4 text-primary-700">Our Plots for Sale</h2>

<form class="m-4">
  <select
    bind:value={city}
    onchange={onCity}
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block md:w-[30rem] sm:w-[25rem] w-[15rem] p-2.5"
  > 
    {#each data.cities as city}
      <option value={city.id}>{city.name}</option>
    {/each}
  </select>
</form>

<div
  class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center mx-10"
>
  {#each plots as plot}
    <div
      class="block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <!-- <a
        data-modal-target="{plot.slug}-modal"
        data-modal-toggle="{plot.slug}-modal"
        class="h-[50rem] max-w-screen"
        href="/"
      > -->
        <Carousel images={plot.images} />
      <!-- </a> -->

      <a href={"/" + plot.slug}>
        <div class="flex justify-between items-center px-4 my-2">
          <h3 class="text-xl font-semibold text-primary-900 ">
            {plot.title}
          </h3>
          <p>₹<span class="text-lg">{plot.price}</span></p>
        </div>
        <div class="flex justify-between items-center px-4 my-2">
          <h3 class="text-lg text-primary-900">
            {plot.sqft} Sqft
          </h3>
          <button
            type="button"
            class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >Contact Owner</button
          >
        </div>
      </a>

      <div
        id="{plot.slug}-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow-sm">
            <div
              class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200"
            >
              <h3 class="text-xl font-semibold text-gray-900">
                {plot.title}
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="{plot.slug}-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div>
              <!-- <Carousel sizeClass="h-[40rem] w-full" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
