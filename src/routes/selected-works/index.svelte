<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`posts.json`)
            .then((r) => r.json())
            .then((entries) => {
                return { entries };
            });
    }
</script>

<script>
    import Table from "./../../components/index/Table.svelte";
    import Overlay from "./components/SelectedWorksOverlay.svelte";

    export let entries;
</script>

<Overlay />
<section class="table-index" id="selected-works-index">
    <Table route="/selected-works" {entries} />
</section>
