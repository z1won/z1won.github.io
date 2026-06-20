<script>
  export let title = '';
  export let slug = '';
  export let date = '';
  export let category = '';
  export let excerpt = '';
  export let readTime = '5 min';
</script>

<article class="blog-card">
  <a href={`/blog/${slug}`} class="card-link">
    <div class="card-header">
      <span class="category-badge">{category}</span>
      <span class="read-time">{readTime}</span>
    </div>
    <h3 class="card-title">{title}</h3>
    <p class="card-excerpt">{excerpt}</p>
    <div class="card-footer">
      <span class="card-date">{new Date(date).toLocaleDateString('ko-KR')}</span>
      <span class="read-more">Read More →</span>
    </div>
  </a>
</article>

<style>
  .blog-card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    height: 100%;
  }

  .blog-card:hover {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(6, 182, 212, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.1);
  }

  .card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .category-badge {
    background: rgba(6, 182, 212, 0.2);
    color: #06b6d4;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .read-time {
    color: #94a3b8;
    font-size: 0.85rem;
    white-space: nowrap;
  }

  .card-title {
    margin: 0 0 1rem 0;
    font-size: 1.3rem;
    color: #e2e8f0;
    transition: color 0.3s ease;
  }

  .blog-card:hover .card-title {
    color: #06b6d4;
  }

  .card-excerpt {
    margin: 0 0 auto 0;
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(148, 163, 184, 0.1);
    color: #94a3b8;
    font-size: 0.9rem;
  }

  .read-more {
    color: #06b6d4;
    font-weight: 600;
    transition: transform 0.3s ease;
  }

  .blog-card:hover .read-more {
    transform: translateX(3px);
  }
</style>
