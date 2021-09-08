import React, { useState } from "react";
import ItemWidget from "../College/ItemWidget";

const SpecialOffers = () => {
  const [widgets, setWidget] = useState({
    results: [
      {
        college_name: "Hansraj College Delhi University",
        promoted: true,
        discount: 20,
        original_fees: 6000,
        discounted_fees: 5200,
        fees_cycle: "Per Semester (3months)",
        image: "college.png",
        ranking: "7 in 260 colleges in north campus",
        tags: ["best colleges in 2018", "2kms away"],
        amenties: ["Fee cancellation", "Free Wifi"],
        rating: 4,
        rating_remarks: "Very Good",
        famous_nearest_places: "2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk",
        nearest_place: [
          "Near Vishwavidyalya Metro Station",
          "2 Kms away from bus stand",
        ],
        offertext: "Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN ",
      },
      {
        college_name: "Hansraj College Delhi University",
        promoted: true,
        discount: 20,
        original_fees: 6000,
        discounted_fees: 5200,
        fees_cycle: "Per Semester (3months)",
        image: "college.png",
        ranking: "7 in 260 colleges in north campus",
        tags: ["best colleges in 2018", "2kms away"],
        amenties: ["Fee cancellation", "Free Wifi"],
        rating: 4,
        rating_remarks: "Very Good",
        famous_nearest_places: "2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk",
        nearest_place: [
          "Near Vishwavidyalya Metro Station",
          "2 Kms away from bus stand",
        ],
        offertext: "Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN ",
      },
      {
        college_name: "Hansraj College Delhi University",
        promoted: true,
        discount: 20,
        original_fees: 6000,
        discounted_fees: 5200,
        fees_cycle: "Per Semester (3months)",
        image: "college.png",
        ranking: "7 in 260 colleges in north campus",
        tags: ["best colleges in 2018", "2kms away"],
        amenties: ["Fee cancellation", "Free Wifi"],
        rating: 4,
        rating_remarks: "Very Good",
        famous_nearest_places: "2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk",
        nearest_place: [
          "Near Vishwavidyalya Metro Station",
          "2 Kms away from bus stand",
        ],
        offertext: "Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN ",
      },
      {
        college_name: "Hansraj College Delhi University",
        promoted: true,
        discount: 20,
        original_fees: 6000,
        discounted_fees: 5200,
        fees_cycle: "Per Semester (3months)",
        image: "college.png",
        ranking: "7 in 260 colleges in north campus",
        tags: ["best colleges in 2018", "2kms away"],
        amenties: ["Fee cancellation", "Free Wifi"],
        rating: 4,
        rating_remarks: "Very Good",
        famous_nearest_places: "2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk",
        nearest_place: [
          "Near Vishwavidyalya Metro Station",
          "2 Kms away from bus stand",
        ],
        offertext: "Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN ",
      },
      {
        college_name: "Hansraj College Delhi University",
        promoted: true,
        discount: 20,
        original_fees: 6000,
        discounted_fees: 5200,
        fees_cycle: "Per Semester (3months)",
        image: "college.png",
        ranking: "7 in 260 colleges in north campus",
        tags: ["best colleges in 2018", "2kms away"],
        amenties: ["Fee cancellation", "Free Wifi"],
        rating: 4,
        rating_remarks: "Very Good",
        famous_nearest_places: "2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk",
        nearest_place: [
          "Near Vishwavidyalya Metro Station",
          "2 Kms away from bus stand",
        ],
        offertext: "Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN ",
      },
      {
        college_name: "Hansraj College Delhi University",
        promoted: true,
        discount: 20,
        original_fees: 6000,
        discounted_fees: 5200,
        fees_cycle: "Per Semester (3months)",
        image: "college.png",
        ranking: "7 in 260 colleges in north campus",
        tags: ["best colleges in 2018", "2kms away"],
        amenties: ["Fee cancellation", "Free Wifi"],
        rating: 4,
        rating_remarks: "Very Good",
        famous_nearest_places: "2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk",
        nearest_place: [
          "Near Vishwavidyalya Metro Station",
          "2 Kms away from bus stand",
        ],
        offertext: "Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN ",
      },
    ],
    moreAvailable: true,
  });

  const renderItems = (items) => {
    return (
      <>
        {items.map((item) => {
          return (
            <ItemWidget
              rating={item.rating}
              rating_remarks={item.rating_remarks}
              tags={item.tags}
              ranking={item.ranking}
              college_name={item.college_name}
              original_fees={item.original_fees}
              discounted_fees={item.discounted_fees}
              fees_cycle={item.fees_cycle}
              amenties={item.amenties}
            />
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div>{renderItems(widgets.results)}</div>
    </div>
  );
};

export default SpecialOffers;
