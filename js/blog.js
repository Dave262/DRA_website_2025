const params = new URLSearchParams(window.location.search);
const post = params.get("post");
const content = document.getElementById("content");

if (!post) {
    content.innerHTML = `
    <h1>Blog</h1>
    <ul>
      <li><a href="/blog.html?post=02-01-2026">2 January 2026</a></li>
    </ul>
  `;
    return;
}
fetch(`/blog_posts/${post}.md`)
    .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
    })
    .then((md) => {
        document.getElementById("content").innerHTML = marked.parse(md);
    })
    .catch(() => {
        document.getElementById("content").innerHTML =
            "<h1>Post not found</h1>";
    });
