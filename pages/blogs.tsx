import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import MydailyskincareroutineBlogsPureBeauty from '../components/ui-components/MydailyskincareroutineBlogsPureBeauty'


export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const baseURL = 'https://wp.planetmedia.dev/wp-json';
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(`${baseURL}/wp/v2/posts`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchBlogs();
  }, []);

  function handleGoBack() {
    router.push('/');
  }

  return (
    <div>
    {/* <Header/> */}
    <MydailyskincareroutineBlogsPureBeauty/>
    {/* <h1>Blogs Page</h1>
    <button onClick={handleGoBack}>Go Back</button>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h2>{blog.title.rendered}</h2>
        <p>{blog.content.rendered}</p>
      </div>
    ))} */}
  </div>
  );
}
