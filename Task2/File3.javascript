document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            title: 'My First Blog Post',
            date: '2024-08-15',
            content: 'This is the content of my first blog post. Welcome to my blog!'
        },
        {
            title: 'Another Interesting Post',
            date: '2024-08-20',
            content: 'Here\'s some more content for my blog. Stay tuned for more updates!'
        },
        // Add more posts as needed
    ];

    const blogPostsSection = document.getElementById('blog-posts');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postDate = document.createElement('p');
        postDate.textContent = `Posted on ${post.date}`;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postCard.appendChild(postTitle);
        postCard.appendChild(postDate);
        postCard.appendChild(postContent);

        blogPostsSection.appendChild(postCard);
    });
});
