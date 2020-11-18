<script>
    export let entry;
</script>

<style lang="scss">
    .ramble-image {
        margin: 1rem 0;
        border-radius: 2px;
        background: #c4c4c4;
        min-height: 245.25px;
        @include bp-small {
            max-width: 525px;
        }
    }
    a {
        text-decoration: none;
        transition: opacity 0.25s cubic-bezier(0.6, 0.04, 0.98, 0.335);
        &:hover {
            opacity: 0.5;
        }
    }
</style>

<a rel="prefetch" href="projects/{entry.slug}">
    <div class="ramble-image"><img src="" alt="" /></div>
    <p class="ramble-title is-title">{entry.title}</p>
    <p class="ramble-desc highlight">{entry.description}</p>
</a>
