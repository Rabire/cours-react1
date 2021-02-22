// import "./Home.css";

export const Header = () => {
  const pages = [
    { title: "Accueil", link: "/" },
    { title: "Promotions", link: "/promo" },
    { title: "Actus", link: "/news" },
  ];

  const partners = [
    { name: "Zebet", link: "https://www.zebet.fr" },
    { name: "Unibet", link: "https://www.unibet.fr/" },
    { name: "ParionsSport", link: "https://www.parionssport.fdj.fr/" },
    { name: "Betclic", link: "https://www.betclic.fr/" },
  ];

  const navItems = pages.map((page) => (
    <li class="nav-item">
      <a class="nav-link" href={`/${page.link}`}>
        {page.title}
      </a>
    </li>
  ));

  const partnersDropdown = partners.map((partner) => (
    <li>
      <a class="dropdown-item" href={partner.link}>
        {partner.name}
      </a>
    </li>
  ));

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/login">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            {navItems}

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nos partenaires
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {partnersDropdown}
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/login">
                Se connecter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
