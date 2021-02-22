export const Card = ({ offer }) => {
  return (
    <div class="card mb-3" style={{ maxWidth: 540 }}>
      <div class="row g-0">
        <div class="col-md-4" className="img-box">
          <img className="img-fluid" src={offer.imageUrl} alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{offer.name}</h5>
            <p class="card-text">{offer.description}</p>
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
