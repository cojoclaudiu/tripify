import './PostsGrid.css';

import React, { useState, useEffect } from 'react';
import PostThumb from './PostThumb';
import Pagination from '../pagination/Pagination';

const PostsGrid = () => {
  const n = 100;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    setPosts([...Array(n)].map((e, i) => <PostThumb key={i} />));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h3 className="widthAlign">Latest Posts</h3>
      <div className="postsGrid widthAlign">{currentPosts}</div>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

export default PostsGrid;
