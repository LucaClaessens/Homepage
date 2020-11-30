<script>
    import { fade } from "svelte/transition";
    import { media } from "../../stores/media.store";

    let delay = new Promise((res) => setTimeout(() => res(), 400));
</script>

<div class="separator">
    {#await delay then awaited}
        {#if $media.medium}
            <svg
                in:fade={{ delay: 200 }}
                out:fade
                viewBox="0 0 1152 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M118.158 26L0 53V0.5H1153.5V26L1090 37.8636L1072.5 32.1364L1030.5 37.8636L977.5 32.1364L960 26H874L793 32.1364L679.5 46.4545L577 53L523.5 37.8636L448.5 32.1364L374 37.8636L247.831 32.1364L187.751 46.4545L161.216 37.8636L118.158 26Z"
                    fill="#D8D8D8" />
                <path
                    d="M0 53L118.158 26L161.216 37.8636L187.751 46.4545L247.831 32.1364L374 37.8636L448.5 32.1364L523.5 37.8636L577 53L679.5 46.4545L793 32.1364L874 26H960L977.5 32.1364L1030.5 37.8636L1072.5 32.1364L1090 37.8636L1153.5 26"
                    stroke="black"
                    stroke-width="3"
                    stroke-dasharray="5 7" />
            </svg>
        {:else}
            <svg
                viewBox="0 0 375 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M118.474 14.4706L0 41V0H251.506H375V26.1275L248.494 20.5L188.253 34.5686L161.647 26.1275L118.474 14.4706Z"
                    fill="#D8D8D8" />
                <path
                    d="M2 41L120.158 14L163.216 25.8636L189.751 34.4545L249.831 20.1364L376 25.8636"
                    stroke="black"
                    stroke-width="3"
                    stroke-dasharray="5 7" />
            </svg>
        {/if}
    {/await}
</div>
