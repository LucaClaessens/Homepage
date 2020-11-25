<script>
    import { onDestroy, onMount } from "svelte";
    import Swiper, { A11y, Keyboard, Lazy, Navigation } from "swiper";
    import ArrowButton from "./../../components/ArrowButton.svelte";

    export let images = [];
    let swiper = null;

    onMount(() => {
        swiper = Swiper.use([Navigation, Lazy, A11y, Keyboard]);

        new Swiper(".swiper-container", {
            lazy: images.length > 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });

    onDestroy(() => (swiper = null));
</script>

<style lang="scss">
    .banner-image {
        position: relative;
    }
    .swiper-container {
        height: 100%;
    }
    .image-wrapper {
        display: flex;
        img {
            object-fit: cover;
            width: 100%;
        }
    }
    .hidden {
        display: none !important;
    }
</style>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/swiper-bundle.min.css" />
</svelte:head>

<div class="banner-image">
    <div class="images-container swiper-container">
        <div class="swiper-wrapper">
            {#each images as image}
                <div class="image-wrapper swiper-slide">
                    <img
                        src={image}
                        alt="Post header image"
                        class="swiper-lazy" />
                    <div
                        class:hidden={images.length <= 1}
                        class="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </div>
            {/each}
        </div>
    </div>
    <div class="controls" class:hidden={images.length <= 1}>
        <ArrowButton className="swiper-button-prev" dir="back" size="small" />
        <ArrowButton
            className="swiper-button-next"
            dir="forward"
            size="small" />
    </div>
</div>
