<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let className = "";
    export let size = "default";
    export let dir = "back";
    export let focusable = true;

    function dispatchClick(event) {
        dispatch("click", event);
    }
</script>

<button
    tabindex={focusable ? '0' : '-1'}
    class="arrow-button size-{size} {className}"
    on:click={dispatchClick}>
    <img src="icons/arrow-{dir}.svg" alt="{dir} arrow" />
</button>
