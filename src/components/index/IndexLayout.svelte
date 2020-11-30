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
                        <picture>
                            <source
                                srcset="{entry.overview_image}.webp"
                                type="image/webp" />
                            <source
                                srcset="{entry.overview_image}.png"
                                type="image/png" />

                            <img
                                class="object-fit-{entry.overview_style}"
                                in:fade={{ delay: 400, duration: 400 }}
                                out:fade={{ duration: 400 }}
                                src="{entry.overview_image}.png"
                                alt="Overview image for project {entry.title}" />
                        </picture>
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
</section>
