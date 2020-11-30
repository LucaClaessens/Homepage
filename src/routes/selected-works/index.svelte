<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`selected-works.json`)
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
    <title>Luca his archive of selected works</title>
    <meta property="og:title" content="Luca his archive of selected works" />
    <meta
        property="og:description"
        content="Selected works that contain some interesting content." />
    <meta property="og:image" content="{page_host}/logo-512.png" />
    <meta property="og:url" content="{page_host}/selected_works" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
        name="Description"
        content="Selected works that contain some interesting content." />
</svelte:head>

<IndexLayout type="selected-works" {entries} />
