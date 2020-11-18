<script>
    export let id;
    export let tagline;
</script>

<section {id}>
    <h4 class="section-headline">{tagline}</h4>
    <slot />
</section>
