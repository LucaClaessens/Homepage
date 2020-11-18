<script>
    import { onMount } from "svelte";
    import { media } from "./../stores/media.store";
    import Chip from "./Chip.svelte";

    export let entries;
    let formatDate = () => void 0;

    onMount(() => {
        formatDate = (dateString) => {
            const rtf = new Intl.RelativeTimeFormat("en", {
                localeMatcher: "best fit",
                numeric: "auto",
                style: "long",
            });

            var DURATION_IN_SECONDS = {
                epochs: ["year", "month", "day", "hour", "minute"],
                year: 31536000,
                month: 2592000,
                day: 86400,
                hour: 3600,
                minute: 60,
            };

            function getDuration(seconds) {
                var epoch, interval;

                for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
                    epoch = DURATION_IN_SECONDS.epochs[i];
                    interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
                    if (interval >= 1) {
                        return {
                            interval: interval,
                            epoch: epoch,
                        };
                    }
                }
            }

            function timeSince(date) {
                var seconds = Math.floor((new Date() - new Date(date)) / 1000);
                var duration = getDuration(seconds);
                return rtf.format(duration.interval * -1, duration.epoch);
            }

            return timeSince(dateString);
        };
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
        text-transform: uppercase;
        font-size: 0.8125rem;
        line-height: 0.969375rem;
        font-weight: 400;
        color: $text-highlight;
        padding: 0.5rem;
    }
    td {
        padding: 1.125rem 0.5rem;
    }
    td.title {
        font-size: 1.125rem;
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
            <th align="left">Title</th>
            {#if $media.medium}
                <th align="left">Description</th>
            {/if}
            <th align="right">When</th>
            <th align="right">What</th>
        </tr>
    </thead>
    <tbody>
        {#each entries as entry}
            <tr
                class="entry-row"
                tabindex="0"
                on:keydown={(event) => (event.key === 'Enter' ? (window.location = `projects/${entry.slug}`) : void 0)}
                on:click={() => (window.location = `projects/${entry.slug}`)}>
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
