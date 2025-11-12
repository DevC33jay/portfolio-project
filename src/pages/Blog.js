import React from 'react';

export default function Blog() {
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'Overview of recent projects.' },
    { id: 2, title: 'Second Post', excerpt: 'Tips on project management.' },
  ];

  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <div className="blog-grid page-content"> {/* Reuses page-content for centering */}
          {posts.map((post) => (
            <div key={post.id} className="blog-card">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="/">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}