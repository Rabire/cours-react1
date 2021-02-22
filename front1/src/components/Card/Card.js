export const Card = () => {
  return (
    <div class="card mb-3" style={{ maxWidth: 540 }}>
      <div class="row g-0">
        <div class="col-md-4" className="img-box">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <button class="btn btn-primary" type="button">
          J'en profite !
        </button>
      </div>
    </div>
  );
};
