import Button from "../../../../components/Button";
import { LIST_POST } from "../../constants";
import ArticleItemMobile from "../ArticleItemMobile";

const ArticleSectionMobile = () => {
  const mediumLink = "https://ari-angga.medium.com/";

  return (
    <div className="mb-24 pt-14" id="articles">
      <div className="flex gap-6 items-center px-10 mb-10">
        <h4 className="text-2xl font-semibold">Projects</h4>
        <div className="h-0.5 bg-gray-900 w-64 rounded-sm" />
      </div>

      <div className="flex flex-col gap-10 mt-7 ">
        {LIST_POST.map((post) => (
          <ArticleItemMobile post={post} key={`${post.title}-${post.date}`} />
        ))}
      </div>

      <div className="mt-10 px-10">
        <Button
          text="See More"
          handleClick={() => {
            window.open(mediumLink, "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default ArticleSectionMobile;
