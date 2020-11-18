<script>
    import { onMount } from "svelte";
    import { format } from "./../services/formatDate.service";
    import { media } from "./../stores/media.store";
    import Chip from "./Chip.svelte";

    export let entries;
    let formatDate = () => void 0;

    onMount(() => {
        formatDate = format(
            new Intl.RelativeTimeFormat("en", {
                localeMatcher: "best fit",
                numeric: "auto",
                style: "long",
            })
        );
    });
</script>

<style lang="scss">
    $bordercolor: #cbcbcb;
    table {
        border-collapse: collapse;
        width: calc(100% + 1rem);
        transform: translateX(-0.5rem);
        max-width: 800px;
    }
    tr {
        border-bottom: 1px solid $bordercolor;
        &.entry-row {
            cursor: pointer;
        }
    }
    th {
        padding: 0.5rem;
    }
    td {
        padding: 1.125rem 0.5rem;
    }
    td.title {
        font-size: 1.125rem;
        line-height: 1.3125rem;
    }
    td.when {
        font-size: 1rem;
        &::first-letter {
            text-transform: uppercase;
        }
    }
</style>

<table>
    <thead>
        <tr>
            <th class="mini-title" align="left">Title</th>
            {#if $media.medium}
                <th class="mini-title" align="left">Description</th>
            {/if}
            <th class="mini-title" align="right">When</th>
            <th class="mini-title" align="right">What</th>
        </tr>
    </thead>
    <tbody>
        {#each entries as entry}
            <tr
                class="entry-row hoverable"
                tabindex="0"
                on:keydown={(event) => (event.key === 'Enter' ? (window.location = `posts/${entry.slug}`) : void 0)}
                on:click={() => (window.location = `posts/${entry.slug}`)}>
                <td class="title">{entry.title}</td>
                {#if $media.medium}
                    <td>{entry.description}</td>
                {/if}
                <td align="right" class="when highlight">
                    {formatDate(entry.date)}
                </td>
                <td align="right">
                    <Chip type={entry.type} />
                </td>
            </tr>
        {/each}
    </tbody>
</table>
