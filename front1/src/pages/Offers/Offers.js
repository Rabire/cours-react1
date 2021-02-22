import "./Offers.css";

import { Card } from "../../components";

const offers = [
  {
    id: 1,
    name: "Winamax",
    description:
      "Do voluptate fugiat id fugiat aliqua ipsum veniam cupidatat magna veniam Lorem fugiat dolore irure. Culpa ex voluptate tempor voluptate Lorem quis nostrud cupidatat pariatur proident. Tempor excepteur veniam velit incididunt incididunt aliqua consequat est proident veniam enim sit sunt enim. Id aute sit non excepteur laboris. Irure nostrud fugiat commodo minim amet nulla.",
    link: "https://www.winamax.fr/",
    imageUrl: "https://images.unsplash.com/photo-1613968088843-0629ce63c320",
    createdAt: "",
    updateAt: "",
  },
  {
    id: 2,
    name: "Winamax",
    description:
      "Do voluptate fugiat id fugiat aliqua ipsum veniam cupidatat magna veniam Lorem fugiat dolore irure. Culpa ex voluptate tempor voluptate Lorem quis nostrud cupidatat pariatur proident. Tempor excepteur veniam velit incididunt incididunt aliqua consequat est proident veniam enim sit sunt enim. Id aute sit non excepteur laboris. Irure nostrud fugiat commodo minim amet nulla.",
    link: "https://www.winamax.fr/",
    imageUrl: "https://images.unsplash.com/photo-1613968088843-0629ce63c320",
    createdAt: "",
    updateAt: "",
  },
  {
    id: 3,
    name: "Winamax",
    description:
      "Do voluptate fugiat id fugiat aliqua ipsum veniam cupidatat magna veniam Lorem fugiat dolore irure. Culpa ex voluptate tempor voluptate Lorem quis nostrud cupidatat pariatur proident. Tempor excepteur veniam velit incididunt incididunt aliqua consequat est proident veniam enim sit sunt enim. Id aute sit non excepteur laboris. Irure nostrud fugiat commodo minim amet nulla.",
    link: "https://www.winamax.fr/",
    imageUrl: "https://images.unsplash.com/photo-1613968088843-0629ce63c320",
    createdAt: "",
    updateAt: "",
  },
  {
    id: 4,
    name: "Winamax",
    description:
      "Do voluptate fugiat id fugiat aliqua ipsum veniam cupidatat magna veniam Lorem fugiat dolore irure. Culpa ex voluptate tempor voluptate Lorem quis nostrud cupidatat pariatur proident. Tempor excepteur veniam velit incididunt incididunt aliqua consequat est proident veniam enim sit sunt enim. Id aute sit non excepteur laboris. Irure nostrud fugiat commodo minim amet nulla.",
    link: "https://www.winamax.fr/",
    imageUrl: "https://images.unsplash.com/photo-1613968088843-0629ce63c320",
    createdAt: "",
    updateAt: "",
  },
  {
    id: 5,
    name: "Winamax",
    description:
      "Do voluptate fugiat id fugiat aliqua ipsum veniam cupidatat magna veniam Lorem fugiat dolore irure. Culpa ex voluptate tempor voluptate Lorem quis nostrud cupidatat pariatur proident. Tempor excepteur veniam velit incididunt incididunt aliqua consequat est proident veniam enim sit sunt enim. Id aute sit non excepteur laboris. Irure nostrud fugiat commodo minim amet nulla.",
    link: "https://www.winamax.fr/",
    imageUrl: "https://images.unsplash.com/photo-1613968088843-0629ce63c320",
    createdAt: "",
    updateAt: "",
  },
];

export const Offers = () => {
  const offersCards = offers.map((offer) => <Card offer={offer} />);

  return (
    <div class="page">
      <div className="grid">{offersCards}</div>
    </div>
  );
};
