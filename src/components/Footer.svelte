<!-- src/components/Footer.svelte -->
<footer class="footer">
  <div class="footer-container">
    <div class="copyright">
      &copy; {new Date().getFullYear()} z1won. All rights reserved.
    </div>
    <div class="powered">
      Astro 4 &times; Svelte 5
    </div>
  </div>
</footer>

<style>
  .footer {
    margin-top: auto;
    border-top: 1px solid #2a2a30;
    background-color: #1a1a1e; /* 메인 배경보다 한 단계 밝은 레이어 분할 */
    padding: 2.5rem 1.5rem;
  }

  .footer-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    letter-spacing: 0.02em;
  }

  .copyright {
    color: #71717a;
    font-weight: 500;
  }

  .powered {
    color: #52525b;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    .footer-container {
      flex-direction: column;
      gap: 0.75rem;
      text-align: center;
    }
  }
</style>
