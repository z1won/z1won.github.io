<script>
  export let title = "Welcome to z1won's Portfolio";
  export let subtitle = "Full-stack Developer | Technical Writer | Open Source Enthusiast";
  export let cta_text = "View My Work";
  export let cta_link = "/portfolio";
</script>

<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">{title}</h1>
    <p class="hero-subtitle">{subtitle}</p>
    <a href={cta_link} class="cta-button">{cta_text}</a>
  </div>
  <div class="hero-shape"></div>
</section>

<style>
  .hero {
    position: relative;
    overflow: hidden;
    padding: 6rem 2rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: #cbd5e1;
    margin: 0 0 2rem 0;
    font-weight: 400;
  }

  .cta-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    color: #0f172a;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(6, 182, 212, 0.4);
  }

  .hero-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent);
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem 1rem;
      margin-bottom: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }
  }
</style>
