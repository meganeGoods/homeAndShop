function newsContentElement(data){
    const string = `
    <div class="news">
        <p class="news_title">${data.title}</p>
        <p class="news_content">${data.content}</p>
        <p class="news_date">${data.date}</p>
    </div>
    `
    const element = new DOMParser().parseFromString(string, "text/html").body.firstElementChild
    return element
}
async function addNews(){
    const newsContents = JSON.parse(localStorage.getItem('newsData'))

    console.log(newsContents)
    const newsArea = document.getElementById("newsArea")
    for(newsContent of newsContents){
        newsArea.appendChild(newsContentElement(newsContent))
    }
}