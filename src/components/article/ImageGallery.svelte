<script>
    import { onDestroy, onMount } from "svelte";
    import Swiper, { A11y, Keyboard, Lazy, Navigation, Zoom } from "swiper";
    import ArrowButton from "./../../components/ArrowButton.svelte";

    export let images = [];
    export let alt = "An image related to the project";
    let swiper = null;

    onMount(() => {
        swiper = Swiper.use([Navigation, Lazy, A11y, Keyboard, Zoom]);

        new Swiper(".swiper-container", {
            lazy: images.length > 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            zoom: {
                maxRatio: 5,
            },
        });
    });

    onDestroy(() => (swiper = null));
</script>

<style lang="scss">
    .banner-image {
        position: relative;
        height: 70vh;
        min-height: 400px;
        .image-wrapper {
            padding: 1rem;
        }
        @include bp-small {
            // height: 400px;
            .image-wrapper {
                padding: 0;
            }
        }
        @include bp-medium {
            // height: auto;
            .image-wrapper {
                padding: 0;
            }
        }
    }
    .swiper-container {
        height: 100%;
        @include bp-small {
            padding: 1rem;
        }
    }
    .image-wrapper {
        position: relative;
        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
            left: 50%;
            top: 50%;
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
                    <picture>
                        <source
                            srcset="{image}.webp"
                            type="image/webp"
                            class="swiper-lazy" />
                        <source
                            srcset="{image}.png"
                            type="image/png"
                            class="swiper-lazy" />

                        <img src="{image}.png" {alt} class="swiper-lazy" />
                    </picture>
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
