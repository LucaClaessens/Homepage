<script>
    export let type;
</script>

<style lang="scss">
    span.chip {
        background-color: #c4c4c4;
        font-size: 0.75rem;
        padding: 4px 6px;
        border-radius: 2px;
        text-transform: capitalize;
        &.design {
            background-color: #ff6b6b;
        }
        &.ramble {
            background-color: #6bc1ff;
        }
        &.research {
            background-color: #64f37b;
        }
        &.text {
            background-color: #ffb340;
        }
        &.thought {
            background-color: #ff52ee;
        }
    }
</style>

<span class="chip {type}"> {type} </span>
