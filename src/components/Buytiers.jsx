import React, { useState } from "react";
import { Image, Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";



function Subscribe() {
    let recommendations = [
        {
            title: "THE GREAT GASBY",
            description: "Recommendation description",
            image: "../../public/images/books/book1.jpg",
            author: "James Wan",
            badge1: "../../public/images/badge.png"
        },
    ];

    const Tiers = [
        {
          name: 'Bronze',
          benefits: ['Unlock 10 chapters', 'Bronze avatar frame', 'No advertising'],
          monthlyCost: 5,
          yearlyCost: 50,
          color: 'secondary'
        },
        {
          name: 'Silver',
          benefits: ['Unlock 25 chapters', 'Silver avatar frame', 'VIP community access', 'No advertising'],
          monthlyCost: 7,
          yearlyCost: 70,
          color: 'secondary'
        },
        {
          name: 'Gold',
          benefits: ['Unlock 50 chapters', 'Gold avatar frame', 'VIP community access', 'No advertising'],
          monthlyCost: 9,
          yearlyCost: 110,
          color: 'secondary'
        },
      ];

    return (
        <>
{/* disaply recommendations as text */}
<div className="shadow-xl pb-1 rounded-lg bg-foreground-50">
   <div className="w-full rounded-md pt-5">
        {recommendations && recommendations.map((recommendation, index) => (
            <div className=" md:w-1/2 m-auto text-primaryText text-center" key={index}>
                <div className="flex justify-center">
                    <div className="inline-block">
                    <Image

                        width="100px"
                        height="160px"
                        className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                        alt="NextUI hero Image"
                        src={recommendation.image}
                    />
                    </div>


                    </div>

                    <div className="inline-block justify-center">
                        <h1 className="text-xl font-semibold">{recommendation.title}</h1>
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-md text-secondaryText">{recommendation.author}</h1>
                        </div>
                    </div>
                ))}
   </div>
        
        <div className="md:flex justify-center md:gap-5 md:mx-0 m-5 pb-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Tiers.map((tier, index) => (
              <Card 
              key={index} 
              className="p-6 bg-whiteText shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              
              <ul className="list-disc list-inside mb-6 h-28 overflow-y-auto">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-600">{benefit}</li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold">${tier.monthlyCost}</p>
                  <p className="text-sm text-gray-500">per month</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">${tier.yearlyCost}</p>
                  <p className="text-sm text-gray-500">per year</p>
                </div>
              </div>
              <Button 
                auto 
                color={tier.color} 
                onPress={() => handleEditTier(tier)} 
                className="w-full"
                variant={"flat"}
              >
                SUBSCRIBE
              </Button>
            </Card>
            
            ))}
          </div>




            </div>

        </div>
        </>
    );
}

export default Subscribe;