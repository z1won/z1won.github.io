<script>
  // src/components/ProjectCard.svelte
  let { title, description, link, github, tags, image } = $props();
</script>

<div class="card">
  <div class="image-wrapper">
    <img src={image} alt={title} loading="lazy" />
  </div>
  <div class="content">
    <h3 class="title">{title}</h3>
    <p class="desc">{description}</p>
    
    <div class="tags">
      {#each tags as tag}
        <span class="tag">#{tag}</span>
      {/each}
    </div>

    <div class="links">
      <a href={link} target="_blank" rel="noopener noreferrer" class="btn btn-flat-primary">Live</a>
      <a href={github} target="_blank" rel="noopener noreferrer" class="btn btn-flat-secondary">GitHub</a>
    </div>
  </div>
</div>

<style>
  .card {
    background: #1a1a1e;
    border: 1px solid #2a2a30;
    border-radius: 4px;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    filter: grayscale(20%); /* 플랫한 느낌을 강조하는 약간의 그레이스케일 */
  }

  .content {
    padding: 1.25rem;
  }

  .title {
    font-size: 1.2rem;
    color: #f4f4f5;
    margin-bottom: 0.5rem;
  }

  .desc {
    color: #a1a1aa;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    font-size: 0.8rem;
    color: #06b6d4;
    font-weight: 500;
  }

  .links {
    display: flex;
    gap: 0.5rem;
  }

  .btn {
    flex: 1;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 4px;
  }

  .btn-flat-primary {
    background: #2a2a30;
    color: #f4f4f5;
  }
  .btn-flat-primary:hover {
    background: #3a3a42;
  }

  .btn-flat-secondary {
    border: 1px solid #2a2a30;
    color: #a1a1aa;
  }
  .btn-flat-secondary:hover {
    color: #f4f4f5;
    border-color: #3a3a42;
  }
</style>
