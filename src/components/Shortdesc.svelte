<script>
    import CategorySelector from "./CategorySelector.svelte";
</script>

<p class="landing-text">
    Hi, this is where I share
    <a href="/selected-works" class="category-link">
        <CategorySelector
            category="selected works"
            icon="icons/selected-works.svg" />
    </a>
    and keep track of<br />
    my
    <a href="/experiments" class="category-link">
        <CategorySelector category="experiments" icon="icons/experiments.svg" />
    </a>
    Sometimes, I also<br />
    like to share some
    <a href="/knowledge" class="category-link category-link__disabled">
        <CategorySelector category="knowledge" icon="icons/knowledge.svg" />
    </a>
</p>
