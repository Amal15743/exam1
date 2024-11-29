import React, { useState } from 'react';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    authorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Blog Added Successfully!');
    setFormData({ blogName: '', description: '', authorName: '' });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ color: '#333' }}>Add Blog</h2>
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          display: 'inline-block', 
          textAlign: 'left', 
          marginTop: '20px', 
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <label style={{ display: 'block', marginBottom: '15px', color: '#555' }}>
          Blog Name:
          <input 
            type="text" 
            name="blogName" 
            value={formData.blogName} 
            onChange={handleChange} 
            required 
            style={{ 
              width: '100%', 
              marginTop: '5px', 
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc' 
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '15px', color: '#555' }}>
          Description:
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
            style={{ 
              width: '100%', 
              marginTop: '5px',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'vertical' 
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '15px', color: '#555' }}>
          Author Name:
          <input 
            type="text" 
            name="authorName" 
            value={formData.authorName} 
            onChange={handleChange} 
            required 
            style={{ 
              width: '100%', 
              marginTop: '5px',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc' 
            }}
          />
        </label>
        <button 
          type="submit" 
          style={{
            display: 'block', 
            margin: '20px auto 0', 
            padding: '10px 20px', 
            backgroundColor: '#ffc107',  // Yellow color
            color: '#333', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
