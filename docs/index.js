const card = (URL, imgSrc, title, desc) => {return(
  <section class="card-list">
    <a class="card-link" href=URL>
      <figure class="card-figure"><img src=imgSrc></figure>
      <h2 class="card-title">title</h2>
      <p class="card-text-tax">desc</p>
    </a>
  </section>
)};
