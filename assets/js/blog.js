document.addEventListener('DOMContentLoaded', function() {
    // Get the blog list element from the DOM
    const blogList = document.querySelector('.blog-list');

    // Get the blog posts from localStorage, or use an empty array if there are no blog posts in localStorage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // For each blog post, create a blog post element and add it to the blog list
    blogPosts.forEach(createBlogPost);

    // Add an event listener to the "Clear Blog" button that clears the blog posts when clicked
    document.getElementById('clear-blog-posts').addEventListener('click', function() {
        blogPosts.length = 0;
        localStorage.removeItem('blogPosts');
    });

    // Creates a blog post element and adds it to the blog list
    function createBlogPost(post) {
        const blogEntry = document.createElement('div');
        blogEntry.className = 'blog-entry';

        const blogTitle = document.createElement('h2');
        blogTitle.innerText = post.blogTitle;

        const blogContent = document.createElement('p');
        blogContent.innerText = post.blogContent;

        const blogAuthor = document.createElement('p');
        blogAuthor.className = 'author';
        blogAuthor.innerText = `Author: ${post.username}`;

        blogEntry.append(blogTitle, blogContent, blogAuthor);
        blogList.appendChild(blogEntry);
    }
});