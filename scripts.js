document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        'posts/credit_card_debt_free.md',
        'posts/canva_pro_membership.md',
        'posts/stretching.md',
        'posts/namp_analysis.md',
        'posts/small_steps.md',
        'posts/quote.md',
        'posts/doing_work.md',
        'posts/current_projects.md',
        'posts/move_body.md',
        'posts/new_job.md',
        'posts/introducing_blog.md'
    ];

    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        fetch(post)
            .then(response => response.text())
            .then(text => {
                const postElement = document.createElement('article');
                postElement.innerHTML = marked(text);
                postsContainer.appendChild(postElement);
            })
            .catch(error => console.error('Error fetching post:', error));
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        'posts/credit_card_debt_free.md',
        'posts/canva_pro_membership.md',
        'posts/stretching.md',
        'posts/namp_analysis.md',
        'posts/small_steps.md',
        'posts/quote.md',
        'posts/doing_work.md',
        'posts/current_projects.md',
        'posts/move_body.md',
        'posts/new_job.md',
        'posts/introducing_blog.md'
    ];

    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        fetch(post)
            .then(response => response.text())
            .then(text => {
                const postElement = document.createElement('article');
                postElement.innerHTML = marked(text);
                postsContainer.appendChild(postElement);
            })
            .catch(error => console.error('Error fetching post:', error));
    });
});
