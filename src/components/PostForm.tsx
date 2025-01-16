import { useState } from 'react';
import { Post } from '../types/Post';

interface PostFormProps {
  addPost: (newPost: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ addPost }) => {
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: Date.now().toString(),
      headline,
      content,
      image,
    };
    addPost(newPost);
    setHeadline('');
    setContent('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Headline:</label>
        <input 
          type="text" 
          value={headline} 
          onChange={(e) => setHeadline(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input 
          type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
