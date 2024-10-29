import { Post } from "../../types";

interface Props {
  post: Post;
}

const ArticleItemMobile = ({ post }: Props) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-16"
    >
      <div className="min-w-44 w-60">
        <img src={post.imgLink} alt={`Ilustrasi-${post.title}`} className="rounded-xl" />
      </div>
      <div className="flex flex-col px-8">
        <p className="italic mb-1">
          {post.section}, {post.date}
        </p>
        <h6 className="text-xl font-semibold mb-3">{post.title}</h6>
        <p>{post.content}</p>
      </div>
    </a>
  );
};

export default ArticleItemMobile;
