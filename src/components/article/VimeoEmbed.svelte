<script>
    export let videoId = "225098789";
</script>

<style lang="scss">
    .banner-video {
        position: relative;
        height: 60vw;
        @include bp-medium {
            height: 63vw;
        }
        @include bp-large {
            height: 75vh;
        }
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<svelte:head>
    <script src="https://player.vimeo.com/api/player.js">
    </script>
</svelte:head>
<div class="banner-video">
    <div class="vimeo-embed-container">
        <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
                title="Embedded video"
                src="https://player.vimeo.com/video/{videoId}?color=1f8bef&title=0&byline=0&portrait=0&controls=1&dnt=1"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen />
        </div>
    </div>
</div>
