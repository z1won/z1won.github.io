<script>
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/z1won', icon: '🐙' },
    { label: 'Email', href: 'mailto:your-email@example.com', icon: '✉️' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' }
  ];
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>z1won</h3>
      <p>Portfolio and Technical Blog</p>
    </div>

    <div class="footer-section">
      <h4>Follow</h4>
      <div class="social-links">
        {#each socialLinks as link}
          <a href={link.href} target="_blank" rel="noopener noreferrer" title={link.label}>
            {link.icon}
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; {year} z1won. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(148, 163, 184, 0.1);
    color: #cbd5e1;
    padding: 3rem 1.5rem 1rem;
    margin-top: 4rem;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .footer-section h3 {
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 0.5rem 0;
  }

  .footer-section h4 {
    color: #e2e8f0;
    margin: 0 0 1rem 0;
  }

  .footer-section p {
    margin: 0;
    font-size: 0.95rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-links a {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    text-decoration: none;
  }

  .social-links a:hover {
    transform: scale(1.2);
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(148, 163, 184, 0.1);
    font-size: 0.9rem;
    color: #64748b;
  }

  .footer-bottom p {
    margin: 0;
  }

  @media (max-width: 768px) {
    .footer {
      padding: 2rem 1rem 0.5rem;
    }

    .footer-content {
      gap: 1.5rem;
    }
  }
</style>
