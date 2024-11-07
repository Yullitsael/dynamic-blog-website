let blogs = [
    { title: "Blog 1", content: "This is the first blog." },
    { title: "Blog 2", content: "This is the second blog." }
];
localStorage.setItem('blogs', JSON.stringify(blogs));

window.onload = function() 
{
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    let postList = document.getElementById('postList');

    blogs.forEach(blog => 
    {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${blog.title}</strong><p>${blog.content}</p>`;
        postList.appendChild(listItem);
    });
};
