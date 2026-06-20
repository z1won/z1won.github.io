<script>
  // src/components/Hero.svelte
  let { title, subtitle, cta_text, cta_link } = $props();
</script>

<div class="hero">
  <div class="hero-content">
    <h1 class="title">{title}</h1>
    <p class="subtitle">{subtitle}</p>
    <a href={cta_link} class="cta-button">{cta_text}</a>
  </div>
</div>

<style>
  .hero {
    padding: 5rem 0;
    text-align: left; /* 2026 플랫 트렌드는 중앙정렬보다 과감한 좌측정렬을 선호합니다 */
    border-bottom: 1px solid #2a2a30;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: #f4f4f5;
    margin-bottom: 1.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #a1a1aa;
    margin-bottom: 2.5rem;
    max-width: 650px;
    line-height: 1.6;
  }

  .cta-button {
    display: inline-block;
    padding: 0.75rem 1.75rem;
    background-color: #06b6d4;
    color: #121214;
    font-weight: 700;
    border-radius: 4px;
    font-size: 0.95rem;
    transition: background-color 0.2s ease;
  }

  .cta-button:hover {
    background-color: #22d3ee;
  }
</style>
