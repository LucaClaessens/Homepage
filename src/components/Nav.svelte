<script>
  export let segment;
</script>

<style>
  @media (min-width: 767px) {
    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  .top-line {
    width: 100%;
    height: 3px;
    background-color: blue;
    border: none;
    outline: none;
    margin: 3rem 0;
  }
  h1 {
    margin-bottom: 0;
    font-size: 2rem;
  }
  button#nav_contact-button {
    background-color: white;
    color: blue;
    padding: 8px 16px;
    border-radius: 8px;
    border: 2px solid white;
    cursor: pointer;
    outline: none;
    display: none;
    will-change: border;
    transition: border 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  @media (min-width: 767px) {
    button#nav_contact-button {
      display: block;
    }
  }
  button#nav_contact-button:hover a {
    color: #4b4bfd;
    transition-delay: 0s;
  }
  button#nav_contact-button:hover svg {
    fill: #4b4bfd;
    transition-delay: 0s;
  }
  button#nav_contact-button:active {
    border: 2px solid #4b4bfd;
    transition-delay: 0s;
  }
  button#nav_contact-button a {
    color: blue;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    will-change: color;
    transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  button#nav_contact-button svg {
    fill: blue;
    margin-right: 1rem;
    will-change: fill;
    transition: fill 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  button#nav_contact-button span {
    transform: translateY(1px);
  }
</style>

<header>
  <h1>
    Luca Claessens &mdash;
    <br />
    <span class="text-lighter">Developer</span>
    &
    <span>Digital designer</span>
  </h1>
  <button id="nav_contact-button">
    <a href="mailto:lucaclae@gmail.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9
          2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      <span>Contact me</span>
    </a>
  </button>
</header>

<hr class="top-line" />
