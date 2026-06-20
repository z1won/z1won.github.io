<script>
  // src/components/Header.svelte
  let { currentPath } = $props();
</script>

<header class="header">
  <div class="header-container">
    <a href="/" class="logo">z1won.dev</a>
    <nav class="nav">
      <!-- About 및 Portfolio 링크를 추가하여 라우팅 확장 -->
      <a href="/" class="nav-link" class:active={currentPath === '/'}>Home</a>
      <a href="/about" class="nav-link" class:active={currentPath.startsWith('/about')}>About</a>
      <a href="/portfolio" class="nav-link" class:active={currentPath.startsWith('/portfolio')}>Portfolio</a>
      <a href="/blog" class="nav-link" class:active={currentPath.startsWith('/blog')}>Blog</a>
    </nav>
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: #121214;
    border-bottom: 1px solid #2a2a30;
  }

  .header-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #f4f4f5;
  }

  .nav {
    display: flex;
    gap: 1.75rem; /* 네비게이션이 늘어남에 따라 여백을 컴팩트하게 조정 */
  }

  .nav-link {
    font-size: 0.95rem;
    font-weight: 500;
    color: #a1a1aa;
    padding: 0.25rem 0;
    transition: color 0.15s ease;
  }

  .nav-link:hover {
    color: #f4f4f5;
  }

  .nav-link.active {
    color: #06b6d4;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    .header-container {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
    .nav {
      gap: 1.25rem;
    }
  }
</style>
