import ArticleCard from "./ArticleCard";
import img1 from "../assets/frame3.png";
import img2 from "../assets/frame4.png";

const articles = [
  {
    image: img1,
    category: "Education",
    title: "How to Help a Stray in Distress",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    image: img2,
    category: "Education",
    title: "Azar is fine now",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    image: img1,
    category: "Education",
    title: "We care",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
];

const ArticleSection = () => {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 mt-8 px-3 sm:px-0">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
};

export default ArticleSection;
