import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image } from "@nextui-org/react";


let ads = [
  {
      id: 1,
      title: "Advertisement 1",
      content: "Advertise your product here!",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
  },
  {
      id: 2,
      title: "Advertisement 2",
      content: "Advertise your product here!",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
  },
  {
      id: 3,
      title: "Advertisement 3",
      content: "Advertise your product here!",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
  },
];

const Advertistment = () => {


  return (
    <>
        <div className="ad-container p-4 rounded-md mx-4">
                {ads &&
                    ads.map((ad, index) => (
                        <div className="" key={ad.id}>
                            <Image width="300px" alt="NextUI hero Image" src={ad.image} />
                            <h2>
                                {ad.title} {index}
                            </h2>
                            <p>{ad.content}</p>
                        </div>
                    ))}
            </div>
    </>
  );
};

export default Advertistment;
