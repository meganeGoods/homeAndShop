function threadsComponent(data,index){
    const string = `
    <a 
        href="./thread/?page=${index}"
        class="thread_link" 
        style="text-decoration:none; color:var(--text-dark);">
        
        <div class="thread">
            <h1 class="thread_title">${data.title}</h1>
            <p class="thread_explanation">${data.explanation}</p>
            <p class="thread_date">${data.date}</p>
        </div>
    </a>
    `
    const element = new DOMParser().parseFromString(string, "text/html").body.firstElementChild
    return element
}