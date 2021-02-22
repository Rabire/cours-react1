// import "./Slider.css";

export const Slider = () => {
  const slides = [
    {
      link: "https://images.unsplash.com/photo-1504279807002-09854ccc9b6c",
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      link: "https://images.unsplash.com/photo-1604156425963-9be03f86a428",
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      link: "https://images.unsplash.com/photo-1547722700-57de0f73d3a5",
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  const sliderItems = slides.map((slide, index) => {
    return (
      <div class={`carousel-item  ${index === 1 ? "active" : ""}`}>
        <img src={slide.link} class="d-block w-100 h-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>{slide.title}</h5>
          <p>{slide.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">{sliderItems}</div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};
