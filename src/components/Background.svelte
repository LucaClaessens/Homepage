<style type="text/scss">
  #smiley {
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .smiley-circle {
      width: 250px;
      height: 250px;
      border-radius: 250px;
      background-color: rgba(255, 255, 0, 0.5);
      filter: blur(60px);
    }
  }
</style>

<section id="smiley">
  <div class="smiley-circle" />
</section>
