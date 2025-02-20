import { useEffect, useState } from 'react';
import PostForm from '../../components/PostForm'
import PostList from '../../components/PostList';
import { Post } from '../../types/Post';
import { supabase } from '../../utils/supabaseClient';
import Image from 'next/image';
import img from '../../../public/images/nav-logo.png'
import Link from 'next/link';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false)
  const handleNav = () => {
    setIsOpen(!isOpen)
  }
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
      <header className='header flex justify-between py-8 text-white h-[3rem] px-4 place-items-center w-[100%] z-50 bg-gray-800'>
        <div className="logo text-center w-[100%] flex justify-between">
          <Link className='logoImg' href="#"><Image src={img} width={130} height={130} alt='logoIcon'></Image></Link>
          <div onClick={handleNav} className='text-3xl'>{isOpen ? `✖`: '☰'}</div>
        </div>
        <nav className='nav w-[100%]'>
          <ul className='flex justify-start gap-2 text-xl'>
            <li><Link href='/blog/blog'>Home</Link></li>
            <li><Link href='/'>Blog</Link></li>
            <li><Link href='/'>Shop</Link></li>
            <li><Link href='/blog/blog'>Contact</Link></li>
            <li><Link href='/blog/blog'>FAQs</Link></li>
          </ul>
        </nav>
        <div className={`miniSreen w-[100%] absolute bg-black top-16 p-10 left-0 h-[50vh] text-center ${isOpen ? 'open' : ''}`}>
          <div><Link href='/blog/blog'>Home</Link></div>
          <div><Link href='/blog/blog'>Blog</Link></div>
          <div><Link href='/blog/blog'>Shop</Link></div>
          <div><Link href='/blog/blog'>Contact</Link></div>
          <div><Link href='/blog/blog'>FAQs</Link></div>
          <div>
            <button className='bg-blue-gray-400'>Get Started</button>
          </div>
        </div>
      </header>
      <div>
        <h1>My Blog</h1>
        <PostForm addPost={addPost} />
        <PostList posts={posts} deletePost={deletePost} />
      </div>
    </div>
  );
};

export default Blog;
