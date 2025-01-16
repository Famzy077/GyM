import { Post } from '../types/Post';

interface PostItemProps {
  post: Post;
  deletePost: (id: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, deletePost }) => {
  return (
    <div>
      <h2>{post.headline}</h2>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt={post.headline} style={{ maxWidth: '100%' }} />}
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default PostItem;
