document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const blogTitle = document.getElementById('blog-title').value.trim();
    const blogContent = document.getElementById('blog-content').value.trim();

    if (!username || !blogTitle || !blogContent) {
        document.getElementById('error-message').innerText = 'Please fill out all fields.';
        return;
    }

    const newBlogPost = {
        username,
        blogTitle,
        blogContent
    };

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(newBlogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html'; // Redirect to the blog page
});

document.getElementById('clear-form-data').addEventListener('click', function() {
    document.getElementById('username').value = '';
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
});