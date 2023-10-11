import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const starRating = (rating: number) => {
  return (
  <div>
  <AiFillStar color={rating >= 1 ? "rgba(255, 192, 48, 1)" : "rgb(212, 206, 206)"} />
  <AiFillStar color={rating >= 2 ? "rgba(255, 192, 48, 1)" : "rgb(212, 206, 206)"} />
  <AiFillStar color={rating >= 3 ? "rgba(255, 192, 48, 1)" : "rgb(212, 206, 206)"} />
  <AiFillStar color={rating >= 4 ? "rgba(255, 192, 48, 1)" : "rgb(211, 206, 206)"} />
  <AiFillStar color={rating >= 5 ? "rgba(255, 192, 48, 1)" : "rgb(212, 206, 206)"} />
  </div>
  );
};
