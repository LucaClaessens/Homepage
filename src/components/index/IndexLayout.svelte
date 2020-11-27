<script>
    import { fade } from "svelte/transition";
    import { media } from "./../../stores/media.store";
    import Table from "./Table.svelte";

    export let type;
    export let entries;

    let hoveredRow = 0;

    function hoverRow(e) {
        hoveredRow = e.detail.index;
    }
</script>

<section id={type} class="list-index-wrapper">
    <div
        in:fade={{ delay: 400, duration: 400 }}
        out:fade={{ duration: 400 }}
        class="table-index"
        id="experiments-index">
        <Table route="/{type}" {entries} on:hover={hoverRow} />
    </div>
    {#if $media.large}
        <div
            in:fade={{ delay: 800, duration: 400 }}
            out:fade={{ duration: 400 }}
            class="image-preview-wrapper"
            style="transform: translateY({25 * hoveredRow}px);">
            <div class="image-preview">
                {#each entries as entry}
                    {#if entry === entries[hoveredRow] && entry.overview_image}
                        <div
                            class="img"
                            in:fade={{ delay: 400, duration: 400 }}
                            out:fade={{ duration: 400 }}
                            style="background-image: url({entry.overview_image});" />
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
</section>
