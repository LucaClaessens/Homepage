<script>
    import { fade } from "svelte/transition";
    import CategorySvg from "./CategorySVG.svelte";

    export let category, icon;
    export let size = "default";
    export let activated = false;
</script>

<span class="is-category cat-size__{size} {activated ? 'is-activated' : ''}">
    <span class="cat-name">{category}</span>
    <span class="cat-background" transition:fade>
        <CategorySvg {category} />
    </span>
</span>
