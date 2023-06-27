import makeAuthenticatedRequest from './login'

export async function fetchBlogPosts() {
    try {
      const posts = await makeAuthenticatedRequest('/wp/v2/posts');
      return posts;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  }
  
  