<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let size = "default";
    export let dir = "back";

    function dispatchClick(event) {
        dispatch("click", event);
    }
</script>

<button class="arrow-button size-{size}" on:click={dispatchClick}>
    <img src="icons/arrow-{dir}.svg" alt="{dir} arrow" />
</button>
