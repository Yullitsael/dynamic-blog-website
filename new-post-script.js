document.getElementById('postForm').addEventListener('submit', function(e)
{
    e.preventDefault();  // Prevent form submission to validate

    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    if (!title || !content)
    {
        alert('Both title and content are required!');
    }
    else
    {
        // Save to localStorage if valid
        savePost(title, content);

        // Redirect to index.html after saving
        window.location.href = 'index.html';
    }
});

function savePost(title, content)
{
    let posts = JSON.parse(localStorage.getItem('blogs'));
    let newPost = { title, content };
    blogs.push(newPost);
    localStorage.setItem('blogs', JSON.stringify(posts));
    console.log("saving blog...")

    console.log(localStorage.getItem('blogs'));
}
