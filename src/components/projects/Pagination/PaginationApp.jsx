import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';
import PageNumbers from './PageNumbers';

const PaginationApp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const handlePostsPerPage = value => {
    // e.preventDefault();
    setPostPerPage(value);
  };
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">Pagination</h2>
      <form>
        <div className="form-group w-25">
          <label htmlFor="exampleFormControlSelect1">Posts per Page</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={e => handlePostsPerPage(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </form>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <PageNumbers
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        loading={loading}
        paginate={paginate}
      ></PageNumbers>
    </div>
  );
};

export default PaginationApp;
