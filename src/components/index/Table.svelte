<script>
    import { goto } from "@sapper/app";
    import { createEventDispatcher } from "svelte";
    import { extractYear } from "../../services/formatDate.service";

    export let entries, route;

    const dispatch = createEventDispatcher();

    let formatDate = extractYear;
</script>

<table>
    <thead>
        <tr>
            <th class="mini-title uppercase" align="left">Title</th>
            <th class="mini-title uppercase" align="right">Year</th>
        </tr>
    </thead>
    <tbody>
        {#each entries as entry, index}
            <tr
                class="entry-row hoverable"
                tabindex="0"
                on:mouseenter={() => dispatch('hover', { entry, index })}
                on:focus={() => dispatch('hover', { entry, index })}
                on:keydown={(event) => (event.key === 'Enter' ? goto(`${route}/${entry.slug}`) : void 0)}
                on:click={() => goto(`${route}/${entry.slug}`)}>
                <td class="title">
                    <a hidden href="{route}/{entry.slug}" class="hidden">🕷</a>
                    <h6>{entry.title}</h6>
                    <span class="details">{entry.subtitle}</span>
                </td>
                <td align="right" class="when highlight">
                    {formatDate(entry.date)}
                </td>
            </tr>
        {/each}
    </tbody>
</table>
