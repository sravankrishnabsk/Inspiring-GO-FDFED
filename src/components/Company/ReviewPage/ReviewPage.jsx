import React, { useState } from "react";
import classes from "../PendingList/PendingList.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdOutlineStar } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
const ReviewPage = () => {
  const [filterType, setFilterType] = useState("All"); // State for filter type
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const reviews = [
    {
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.",
      rating: 4,
      userName: "John Doe",
      type: "Compliment",
      role: "Software Enginner",
    },
    {
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      rating: 3,
      userName: "vot Doe",
      type: "Suggestion",
      role: "Data Enginner",
    },
    {
      feedback:
        "Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.",
      rating: 2,
      userName: "benny Doe",
      type: "Feedback",
      role: "Data Analyst",
    },
    {
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      rating: 1,
      userName: "um Doe",
      type: "Suggestion",
      role: "ML Enginner",
    },
    {
      feedback: "Simple and so much helpful",
      rating: 1,
      userName: "um Doe",
      type: "Suggestion",
      role: "ML Enginner",
    },
  ];
  return (
    <div className="max-h-full w-auto absolute right-0" id="PendingList">
      <div className={classes.container}>
        <h2>Reviews</h2>
        <div className="flex items-baseline w-[100%]">
          {/* type-based filter */}
          <div className="filter-section">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border-2 border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500 h-10 w-30"
            >
              <option value="All" className="text-base">
                All Reviews
              </option>
              <option value="Compliment" className="text-base">
                Compliments
              </option>
              <option value="Suggestion" className="text-base">
                Suggestions
              </option>
              <option value="Feedback" className="text-base">
                Feedbacks
              </option>
            </select>
          </div>
          {/* search */}
          <div className="h-10 w-[20%] px-3 py-1 focus:outline-none focus:border-blue-500 ">
            <input
              type="text"
              placeholder="🔍 Search by User Name or Role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-[300px] border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="w-[80vw]  grid grid-cols-2 gap-4">
          {reviews
            .filter(
              (review) =>
                (filterType === "All" || review.type === filterType) &&
                (review.userName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                  review.role.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            
            // card
            .map((review, index) => (
              
              <div
                key={index}
                className="flex border-[1px] h-50 rounded-lg shadow-lg m-1"
                data-tooltip-id={`review-card-${index}`}
              >
                  <ReactTooltip
                    id={`review-card-${index}`}
                    place="bottom"
                    variant="dark">
                     <h1>Gives info Timestamps</h1>
                     Joined On : <br />
                     Ended on :
                  </ReactTooltip>
                <div className="flex items-left justify-center">
                  <span className="inline-flex justify-around items-baseline text-center [writing-mode:vertical-lr] rotate-180 bg-slate-200  border-[1px] rounded-sm text-xl py-6 px-2">
                    {review.type}

                    {/* <div className="bg-red-500 rounded-[50%] h-[1rem] w-[1rem]"></div> */}
                  </span>
                </div>
                <div className="w-full">
                  <div className="flex justify-between p-2 items-center bg-slate-200">
                    <div
                      className={`bg-${
                        review.type === "Compliment"? "green": 
                        review.type === "Suggestion"? "blue"
                        :"red"
                      }-500 rounded-[50%] h-[1rem] w-[1rem]`}
                    ></div>
                    <div className="flex">
                      <p className="text-base border-2 border-solid bg-emerald-300 px-[0.3rem] py-[0.16rem] mr-3 rounded-md">
                        {review.userName}
                      </p>
                      <p className="text-base border-2 border-solid bg-yellow-200 px-[0.3rem] py-[0.16rem] mr-3 rounded-md">
                        {review.role}
                      </p>
                      {[...Array(5)].map((_, i) =>
                        i < review.rating ? (
                          <MdOutlineStar
                            key={i}
                            size={30}
                            style={{ color: "#ffa534" }}
                          />
                        ) : (
                          <IoMdStarOutline
                            key={i}
                            size={30}
                            style={{ color: "#ffa534" }}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <p className="p-2 text-base ">{review.feedback}</p>
                </div>
                
              </div>
            )
            )
            }
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
