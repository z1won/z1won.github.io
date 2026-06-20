<script>
  // src/components/BlogCard.svelte
  let { title, slug, date, category, excerpt, readTime } = $props();
</script>

<article class="blog-card">
  <div class="meta">
    <span class="category">{category}</span>
    <span class="read-time">{readTime}</span>
  </div>
  
  <a href={`/blog/${slug}`} class="title-link">
    <h3 class="title">{title}</h3>
  </a>
  
  <p class="excerpt">{excerpt}</p>
  
  <div class="footer">
    <time datetime={date}>{date}</time>
  </div>
</article>

<style>
  .blog-card {
    background: #1a1a1e;
    border: 1px solid #2a2a30;
    border-radius: 4px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }

  .category {
    color: #06b6d4;
    font-weight: 600;
  }

  .read-time {
    color: #71717a;
  }

  .title {
    font-size: 1.25rem;
    color: #f4f4f5;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .title-link:hover .title {
    color: #06b6d4;
  }

  .excerpt {
    color: #a1a1aa;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .footer time {
    font-size: 0.8rem;
    color: #71717a;
  }
</style>
