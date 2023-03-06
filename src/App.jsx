import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './component/posts'
import Pagination from './component/paginate'


export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsperpage, setPostsperpage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const lastIndex = currentpage * postsperpage;
  const firstIndex = lastIndex - postsperpage;
  const paging = posts.slice(firstIndex, lastIndex);


  return (
    <main>
      <h1>My Blog</h1>
      <Posts posts={paging} loading={loading} />
      <Pagination postsperpage={postsperpage} totalPosts={posts.length} setCurrentpage={setCurrentpage} />
    </main>
  )
}
