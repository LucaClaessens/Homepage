<script>
    import ArrowButton from "./ArrowButton.svelte";

    let showContact = false;
</script>

<footer>
    <h6>
        {#if !showContact}
            <a href="/info">info</a>
            <span>&mdash;</span>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                href="/"
                on:click|preventDefault={() => (showContact = true)}>contact</a>
        {:else}
            <span on:click={() => (showContact = false)}>
                <ArrowButton dir="back" size="small" />
            </span>
            <a
                href="mailto:info@lookaluca.com"
                target="_blank"
                rel="noopener">info@lookaluca.com</a>
        {/if}
    </h6>
</footer>
