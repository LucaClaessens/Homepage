<script>
    import { fade } from "svelte/transition";
</script>

<style lang="scss">
    #information {
        margin-top: 2rem;
        .information-body {
            max-width: 500px;
            margin-bottom: 2rem;
        }
    }
</style>

<section
    id="information"
    in:fade={{ delay: 400, duration: 400 }}
    out:fade={{ duration: 400 }}>
    <div class="information-body">
        <p class="text-body">
            Luca Claessens is a creative developer and digital designer. His
            work explores the themes of digital sovereignity and a humane
            internet.
        </p>
        <br />
        <p class="text-body">
            Prior to freelancing, he worked as a frontend developer and is an
            alum of the Design Academy Eindhoven.
        </p>
    </div>
    <div class="information-qualifications">
        <div class="mini-title uppercase">Work</div>
        <ul>
            <li>Freelance, 2016&mdash;present</li>
            <li>Zzapps, 2018&mdash;2020</li>
        </ul>
    </div>
</section>
