<script>
    export let category;
</script>

{#if category === 'experiments'}
    <svg viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.5 43L1 27L8.5 10L27.5 6.99999L46.5 4.22516L72 10L103.5 1L135 6.99999L182 4.22516L206 6.99999L219 34.5L214 40.5L185 48.0132L142 43H77H40.75L26 44L4.5 43Z"
            stroke="#231F20"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-dasharray="7 5" />
    </svg>
{:else if category === 'knowledge'}
    <svg viewBox="0 0 208 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 40.5L1 24L7.09914 1L21.5 4H53.5L90 1.22517L117.5 4H147.5H173.5L200 10L206.5 24L200 52.5L179 45.0132H131.5H71.5L5.5 40.5Z"
            stroke="#231F20"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-dasharray="7 5" />
    </svg>
{:else if category === 'selected works'}
    <svg viewBox="0 0 264 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.5 49.0132L1 29.5L9.5 10.9868L41 5.22517L65.7059 10.9868L94 5.22517L131 1L152.738 10.9868L179.994 5.22517L252 8.5L263 25.1987L254 49.0132L195 44L147 49.0132L69.5 44L9.5 49.0132Z"
            stroke="#231F20"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-dasharray="7 5" />
    </svg>
{/if}
