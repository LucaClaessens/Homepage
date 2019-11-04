<script>
  import { onMount } from "svelte";

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Luca Claessens</title>
  <meta
    name="Description"
    content="Developer and digital designer, based in Eindhoven." />
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">

  </script>
</svelte:head>
<section id="about">
  <p>
    Hello, I am Luca &ndash; a Dutch born developer & digital designer who is
    passionate about meaningful, ethical, accessible digital experiences that
    leave a positive impact on people and their environment.
  </p>
  <p>
    During my studies at
    <a href="https://www.designacademy.nl/">Design Academy Eindhoven</a>
    i've made the decision to operate inbetween design and development. I care
    about tools that work well, for everyone who interfaces with them. By
    applying my understanding of design processes I aim to be instrumental in
    realizing intuitive, high standard, digital experiences.
  </p>
  <p>
    I am currently looking for work opportunities. If I sound like a good fit
    for your team or you want to discuss a project,
    <a href="mailto:lucaclae@gmail.com">get in touch with me</a>
    .
  </p>
  <p>References and CV are available upon request.</p>
</section>
