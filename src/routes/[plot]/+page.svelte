<script>
  import Carousel from "../../components/Carousel.svelte";
  let { data } = $props();
</script>

<div class="bg-translucent w-[90vw] rounded-xl shadow-xl p-5">
    
    <div class="justify-between grid md:grid-cols-2 grid-cols-1 items-center">
        <div class="flex flex-col">
            <div class="items-end gap-1 md:flex grid grid-cols-1">
                <h1 class="text-4xl font-bold">
                    {data.plot.price}
                </h1>
                <p class="text-2xl">@ {data.cities.find(city => city.id == data.plot.city)?.name}</p>
            </div>
            <p class="text-xl">{data.plot.title}</p>
        </div>
        <p class="text-2xl flex md:justify-end mt-5 md:m-0">+91 9791225533</p>
    </div>
  <div class="flex justify-center md:mx-10 my-5 m-1">
      <Carousel class="max-w-[60rem]" images={data.plot.images} />
  </div>
  <div class="mt-4">{@html data.plot.description}</div>

  <div class="flex place-items-center flex-col">
  <!-- <h1 class="text-4xl font-bold my-5 w-max">Contact the Owner</h1>
  <form class="flex flex-col gap-5 w-full max-w-[40rem]">
    <div>
      <label for="name" class="block text-sm font-medium text-primary"
        >Your Name</label
      >
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
        class="w-full p-2.5 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-primary"
        >Your Phone Number</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center px-3 text-primary"
        >
          +91
        </div>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          required
          class="w-full pl-14 p-2.5 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>

    <div class="items-end flex">
      <button
        type="submit"
        class="w-full rounded-lg bg-primary-600 text-white font-semibold py-2 hover:bg-primary-700 transition"
      >
        Submit
      </button>
    </div>
  </form> -->
  </div>
</div>
