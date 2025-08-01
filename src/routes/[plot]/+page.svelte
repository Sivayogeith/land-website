<script>
	let { data } = $props();
</script>

<div class="bg-translucent w-[90vw] h-[60dvh] rounded-xl shadow-xl p-5 text-center">
    <h1 class="text-4xl font-bold">{data.plot.title}</h1>
    <div class="mt-4">{@html data.plot.description}</div>
</div>