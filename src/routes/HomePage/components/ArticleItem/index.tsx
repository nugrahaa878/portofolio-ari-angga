import { Post } from "../../types";

interface Props {
  post: Post;
}

const ArticleItem = ({ post }: Props) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-start gap-8 hover:opacity-80 transition-opacity"
    >
      <div className="flex flex-col">
        <p className="italic mb-1">
          {post.section}, {post.date}
        </p>
        <h6 className="text-xl font-semibold mb-3">{post.title}</h6>
        <p>{post.content}</p>
      </div>

      <div className="w-[200px] h-[150px] flex-shrink-0 flex items-center justify-center">
        <img 
          src={post.imgLink} 
          alt={`Ilustrasi-${post.title}`}
          className="object-cover rounded-lg"
        />
      </div>
    </a>
  );
};

export default ArticleItem;
