import React, { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10))); // Limit to 10 posts for brevity
  }, []);

  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Blog Dashboard</h2>
      <div style={{ overflowX: 'auto' }}>
        <table 
          style={{
            width: '90%', 
            margin: '0 auto', 
            borderCollapse: 'collapse', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
            <tr>
              <th style={{ padding: '15px', fontSize: '16px' }}>ID</th>
              <th style={{ padding: '15px', fontSize: '16px' }}>Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr 
                key={post.id}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff',
                  transition: 'background-color 0.3s ease'
                }}
              >
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{post.id}</td>
                <td style={{ 
                  padding: '12px', 
                  borderBottom: '1px solid #ddd', 
                  textAlign: 'left',
                  fontWeight: '500' 
                }}>
                  {post.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
