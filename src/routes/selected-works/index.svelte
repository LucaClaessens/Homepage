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
    import { fade } from "svelte/transition";
    import Table from "./../../components/index/Table.svelte";

    export let entries;
</script>

<section
    in:fade={{ delay: 400, duration: 400 }}
    out:fade={{ duration: 400 }}
    class="table-index"
    id="selected-works-index">
    <Table route="/selected-works" {entries} />
</section>
