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

    export let entries;
</script>

<svelte:head>
    <title>Luca his archive of selected works</title>
    <meta
        name="Description"
        content="Selected works that contain some interesting content." />
</svelte:head>

<IndexLayout type="selected-works" {entries} />
