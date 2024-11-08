console.log(localStorage.getItem('blogs'));

let blogs = [
    { title: "Blog 1", content: "This is the first blog." },
    { title: "Blog 2", content: "This is the second blog." }
];
localStorage.setItem('blogs', JSON.stringify(blogs));

window.onload = function()
{
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    let postList = document.getElementById('postList');

    if (blogs && blogs.length > 0)
    {
        let blogCount = blogs.length;
        console.log(blogCount);
        for (let i = 0; i < blogCount; i++)
        {
            let blog = blogs[i];
            if (blog && blog.title)  // Check if blog and title exist
            {
                let listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${blog.title}</strong><p>${blog.content}</p>`;
                postList.appendChild(listItem);
            }
        }
    }
    else
    {
        console.log("No blogs found in localStorage.");
    }
};

