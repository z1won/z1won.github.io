<script>
  // src/components/Header.svelte
  // Svelte 5 최신 Runes 문법으로 Props 수신
  let { currentPath } = $props();
</script>

<header class="header">
  <div class="header-container">
    <a href="/" class="logo">z1won.dev</a>
    <nav class="nav">
      <!-- 2026 플랫 시스템: 박스 형태가 아닌 심플한 텍스트와 보더 라인으로 활성화 상태 표시 -->
      <a href="/" class="nav-link" class:active={currentPath === '/'}>Home</a>
      <a href="/blog" class="nav-link" class:active={currentPath.startsWith('/blog')}>Blog</a>
    </nav>
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: #121214; /* 매트 플랫 다크 배경 */
    border-bottom: 1px solid #2a2a30; /* 뚜렷한 솔리드 테두리 */
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
    gap: 2rem;
  }

  .nav-link {
    font-size: 0.95rem;
    font-weight: 500;
    color: #a1a1aa;
    position: relative;
    padding: 0.25rem 0;
    transition: color 0.15s ease;
  }

  .nav-link:hover {
    color: #f4f4f5;
  }

  .nav-link.active {
    color: #06b6d4; /* 브랜드 포인트 컬러 */
    font-weight: 700;
  }
</style>
