<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<style>
	.error {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.err-msg {
		margin-bottom: 2rem;
	}
</style>

<svelte:head>
	<title>{status} | {error.message}</title>
</svelte:head>
<div class="error">
	<h1>{status}</h1>

	<p class="body-text err-msg">{error.message}</p>
	<p class="body-text"><a href="/">Take me back home</a></p>

	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>
