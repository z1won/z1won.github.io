<script>
  export let currentPath = '/';
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' }
  ];
</script>

<header class="navbar">
  <div class="nav-container">
    <div class="logo">
      <a href="/">
        <span class="logo-text">z1won</span>
      </a>
    </div>

    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      <span class="hamburger" class:active={isMenuOpen}></span>
      <span class="hamburger" class:active={isMenuOpen}></span>
      <span class="hamburger" class:active={isMenuOpen}></span>
    </button>

    <nav class="nav-menu" class:open={isMenuOpen}>
      {#each navItems as item}
        <a
          href={item.href}
          class="nav-link"
          class:active={currentPath === item.href}
          on:click={() => (isMenuOpen = false)}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .navbar {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .logo-text {
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
  }

  .nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #06b6d4;
  }

  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    gap: 5px;
  }

  .hamburger {
    width: 25px;
    height: 3px;
    background: #06b6d4;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }

    .nav-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      gap: 0;
      background: rgba(15, 23, 42, 0.98);
      padding: 1rem 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .nav-menu.open {
      max-height: 300px;
    }

    .nav-link {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .nav-link.active::after {
      display: none;
    }
  }
</style>
