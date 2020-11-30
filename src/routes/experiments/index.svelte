<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`experiments.json`)
            .then((r) => r.json())
            .then((entries) => {
                return { entries };
            });
    }
</script>

<script>
    import IndexLayout from "./../../components/index/IndexLayout.svelte";
    import { page_host } from "./../core/config";

    export let entries;
</script>

<svelte:head>
    <meta property="og:title" content="Luca his archive of experiments" />
    <meta
        property="og:description"
        content="Experiments that contain some interesting content." />
    <meta property="og:image" content="{page_host}/logo-512.png" />
    <meta property="og:url" content="{page_host}/experiments" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>Luca his archive of experiments</title>
    <meta
        name="Description"
        content="Experiments that contain some interesting content." />
</svelte:head>

<IndexLayout type="experiments" {entries} />
