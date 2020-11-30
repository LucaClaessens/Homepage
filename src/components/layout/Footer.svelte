<script>
    import { fly } from "svelte/transition";
    import ArrowButton from "../ArrowButton.svelte";

    let showContact = false;
</script>

<footer>
    {#if !showContact}
        <h6
            in:fly={{ y: -20, duration: 250, delay: 100 }}
            out:fly={{ y: -20, duration: 250 }}>
            <a href="/info">info</a>
            <span>&mdash;</span>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                href="/"
                on:click|preventDefault={() => (showContact = true)}>contact</a>
        </h6>
    {:else}
        <h6
            in:fly={{ x: -300, duration: 250, delay: 100 }}
            out:fly={{ x: -300, duration: 250 }}>
            <span on:click={() => (showContact = false)}>
                <ArrowButton dir="back" size="small" />
            </span>
            <a
                href="mailto:info@lookaluca.com"
                target="_blank"
                rel="noopener">info@lookaluca.com</a>
        </h6>
    {/if}
</footer>
