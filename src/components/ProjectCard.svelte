<script>
  export let title = '';
  export let description = '';
  export let link = '';
  export let github = '';
  export let tags = [];
  export let image = '';
</script>

<article class="project-card">
  {#if image}
    <div class="card-image" style="background-image: url({image})"></div>
  {/if}
  <div class="card-content">
    <h3 class="card-title">{title}</h3>
    <p class="card-description">{description}</p>
    <div class="tags">
      {#each tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
    <div class="card-links">
      {#if link}
        <a href={link} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Demo</a>
      {/if}
      {#if github}
        <a href={github} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
      {/if}
    </div>
  </div>
</article>

<style>
  .project-card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(6, 182, 212, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.1);
  }

  .card-image {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-color: rgba(148, 163, 184, 0.1);
  }

  .card-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: #e2e8f0;
    transition: color 0.3s ease;
  }

  .project-card:hover .card-title {
    color: #06b6d4;
  }

  .card-description {
    margin: 0 0 1rem 0;
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 0.9rem;
    flex: 1;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    background: rgba(6, 182, 212, 0.1);
    color: #06b6d4;
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .card-links {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    flex: 1;
    text-align: center;
  }

  .btn-primary {
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    color: #0f172a;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
  }

  .btn-secondary {
    background: rgba(6, 182, 212, 0.2);
    color: #06b6d4;
    border: 1px solid rgba(6, 182, 212, 0.4);
  }

  .btn-secondary:hover {
    background: rgba(6, 182, 212, 0.3);
    border-color: rgba(6, 182, 212, 0.6);
  }
</style>
