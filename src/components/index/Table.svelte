<script>
    import { extractYear } from "../../services/formatDate.service";

    export let entries, route;

    let formatDate = extractYear;
</script>

<table>
    <thead>
        <tr>
            <th class="mini-title" align="left">Title</th>
            <th class="mini-title" align="right">Year</th>
        </tr>
    </thead>
    <tbody>
        {#each entries as entry}
            <tr
                class="entry-row hoverable"
                tabindex="0"
                on:keydown={(event) => (event.key === 'Enter' ? (window.location = `${route}/${entry.slug}`) : void 0)}
                on:click={() => (window.location = `${route}/${entry.slug}`)}>
                <td class="title">
                    <h6>{entry.title}</h6>
                </td>
                <td align="right" class="when highlight">
                    {formatDate(entry.date)}
                </td>
            </tr>
        {/each}
    </tbody>
</table>
