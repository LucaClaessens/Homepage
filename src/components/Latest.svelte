<script>
    export let entry;
</script>

<style lang="scss">
    .ramble-image {
        margin: 1rem 0;
        border-radius: 2px;
        background: #c4c4c4;
        min-height: 315px;
        @include bp-small {
            max-width: 525px;
        }
    }
    a {
        cursor: pointer;
        text-decoration: none;
    }
</style>

<div class="hoverable">
    <a rel="prefetch" href="posts/{entry.slug}">
        <div class="ramble-image"><img src="" alt="" /></div>
        <p class="ramble-title is-title">{entry.title}</p>
        <p class="ramble-desc highlight">{entry.description}</p>
    </a>
</div>
