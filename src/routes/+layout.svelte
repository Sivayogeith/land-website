<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <!-- <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script> -->
</svelte:head>


<div
  class="container min-h-screen max-w-screen bg-linear-to-t to-primary-100 from-primary-200 justify-between flex flex-col"
>
  <Navbar />
  <div class="py-12 flex flex-col justify-center items-center">
    {@render children?.()}
  </div>
  <Footer />
</div>

