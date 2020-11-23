<script>
    export let post;
</script>

<style lang="scss">
    .post-meta {
        max-width: 800px;
        .meta-row {
            display: flex;
            padding: 2rem 0;
            .meta-block {
                flex: 1;
                .mini-title {
                    display: block;
                    margin-bottom: 0.5rem;
                }
            }
        }
    }
    .description {
        max-width: 550px;
        font-size: 1.125rem;
        line-height: 1.3125rem;
    }
</style>

<div class="post-meta">
    <div class="meta-row">
        <div class="meta-block">
            <span class="mini-title">Details</span>
            <p class="description">{post.description}</p>
        </div>
    </div>
    <div class="meta-row">
        <div class="meta-block">
            <span class="mini-title">Title</span>
            <p>{post.title}</p>
        </div>
        <div class="meta-block">
            <span class="mini-title">Medium</span>
            <p>{post.medium}</p>
        </div>
    </div>
</div>
