import React from "react";
import { Card, Button } from "@nextui-org/react";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Subscribe({ data }) {

  const navigate = useNavigate();

  async function handleSubcribe(tier, amount) {
    console.log(tier)

    if(confirm(`Are you sure you want to subscribe to this tier?`)) {
      const response = await axios.post(`/api/subscription/create`, {
        novelId: data.novel.id,
        subscriptionTier: tier,
        amount: amount
      })

      console.log(response)

      if(response.status === 200) {
        switch(response.data.code) {
          case "00":
            alert("Subscription successful")
            navigate(`/novels/${data.novel.id}`)
            break;
          case "05":
            alert("Error: " + response.data.message)
            break;
          default:
            alert("An error occurred. Try Again")
            break;
        }
      } else {
        alert("An error occurred")
      }
    }

  }

  return (
    <>
      {/* disaply recommendations as text */}
      <div className="shadow-xl pb-1 rounded-lg bg-foreground-50">
        <div className="w-full rounded-md pt-5">
          <div className=" md:w-1/2 m-auto text-primaryText text-center">
            <div className="flex justify-center">
              <div className="inline-block">
                <ImageOnline
                  className="object-cover w-[120px] h-[150px] hover:scale-105 !rounded-sm transition-transform duration-300 ease-in-out hover:cursor-pointer"
                  width={120}
                  height={150}
                  path={data.novel.coverImage}
                  alt={data.novel.title}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="inline-block justify-center">
              <h1 className="text-xl font-semibold">{data.novel.title}</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="text-md text-secondaryText">
                {data.novel.author.displayName}
              </h1>
            </div>
          </div>
        </div>

        <div className="md:flex justify-center md:gap-5 md:mx-0 m-5 pb-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card ONE */}
            <Card className="p-6 bg-whiteText shadow-lg transform transition-transform duration-300 min-w-[250px] ease-in-out hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">{data.tier1_name}</h3>

              <ul className="list-disc list-inside mb-6 h-28 overflow-y-auto">
                {data.tier1_features.map((benefit, i) => (
                  <li key={i} className="text-gray-600">
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">${data.tier1_price}</p>
                  <p className="text-sm text-gray-500">per month</p>
                </div>
              </div>
              <Button
                auto
                color="primary"
                onPress={() => handleSubcribe(1, data.tier1_price)}
                className="w-full"
                variant={"flat"}
              >
                SUBSCRIBE
              </Button>
            </Card>

            {/* Card TWO */}
            <Card className="p-6 bg-whiteText shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">{data.tier2_name}</h3>

              <ul className="list-disc list-inside mb-6 h-28 overflow-y-auto">
                {data.tier2_features.map((benefit, i) => (
                  <li key={i} className="text-gray-600">
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">${data.tier2_price}</p>
                  <p className="text-sm text-gray-500">per month</p>
                </div>

              </div>
              <Button
                auto
                color="secondary"
                onPress={() => handleSubcribe(2, data.tier2_price)}
                className="w-full"
                variant={"flat"}
              >
                SUBSCRIBE
              </Button>
            </Card>

            {/* Card THREE */}
            <Card className="p-6 bg-whiteText shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">{data.tier3_name}</h3>

              <ul className="list-disc list-inside mb-6 h-28 overflow-y-auto">
                {data.tier3_features.map((benefit, i) => (
                  <li key={i} className="text-gray-600">
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">${data.tier3_price}</p>
                  <p className="text-sm text-gray-500">per month</p>
                </div>
              </div>
              <Button
                auto
                color="primary"
                onPress={() => handleSubcribe(3, data.tier3_price)}
                className="w-full"
                variant={"flat"}
              >
                SUBSCRIBE
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
