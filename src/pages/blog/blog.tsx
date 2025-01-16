import { useEffect, useState } from 'react';
import PostForm from '../../components/PostForm'
import PostList from '../../components/PostList';
import { Post } from '../../types/Post';
import { supabase } from '../../utils/supabaseClient';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from Supabase on page load
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setPosts(data as Post[]);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (newPost: Post) => {
    const { data, error } = await supabase.from('posts').insert([
      {
        headline: newPost.headline,
        content: newPost.content,
        image: newPost.image,
      },
    ]);
    if (error) {
      console.error(error);
    } else {
      if (data) {
        setPosts((prevPosts) => [data[0] as Post, ...prevPosts]);
      }
    }
  };

  const deletePost = async (id: string) => {
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) {
      console.error(error);
    } else {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    }
  };

  return (
    <div>
      <h1>My Blog</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default Blog;
