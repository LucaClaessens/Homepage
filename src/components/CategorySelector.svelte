<script>
    export let category, icon;
    export let size = "default";
    export let activated = false;

    async function svgPromise() {
        if (icon) {
            const res = await fetch(icon);
            return await res.text();
        } else {
            throw new Error("No icon defined for category selector ", category);
        }
    }
</script>

<span class="is-category cat-size__{size} {activated ? 'is-activated' : ''}">
    <span class="cat-name">{category}</span>
    {#await svgPromise() then svg}
        <span class="cat-background">
            {@html svg}
        </span>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</span>
