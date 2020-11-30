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

    export let entries;
</script>

<svelte:head>
    <title>Luca his archive of experiments</title>
    <meta
        name="Description"
        content="Experiments that contain some interesting content." />
</svelte:head>

<IndexLayout type="experiments" {entries} />
