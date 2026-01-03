/*
 * @require /src/markdown.js
 */ 

let page;

function exit(context) {
  if (context === "NotFound") {
    window.location.href = `/wiki/error/404?${page}`;
  } else if (context === "NoPage") {
    window.location.href = "/wiki/error/404";
  } else {
    window.location.href = "/wiki";
  }
}

const pageMatch = window.location.href.match(/https?:\/\/.*\?(.*)/);
if (!pageMatch) exit("NoPage");
page = pageMatch[1];
if (!page) exit("NoPage");

async function loadPage() {
  const response = await fetch(`/wiki/content/${page}.md`);
  if (response.status === 404) return exit("NotFound");
  if (response.status !== 200) {
    console.log(response);
    document.body.innerText = "Unexpected error occured. Please check console for more details.";
    return;
  }
  const content = await response.text();
  const article = document.getElementById("article");
  document.title = `${page.replaceAll("-", " ")} : UTMM Wiki`
  article.innerHTML = window.markdown(content);
  
  // KaTeX integration
  renderMathInElement(document.getElementById('article'));
}

loadPage();
