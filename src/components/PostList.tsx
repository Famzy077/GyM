import { Post } from '../types/Post';
import PostItem from '../components/PostItems';

interface PostListProps {
  posts: Post[];
  deletePost: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostItem key={post.id} post={post} deletePost={deletePost} />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
