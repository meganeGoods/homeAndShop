function threadsComponent(data){
    const string = `
    <div class="thread">
        <h1 class="thread_title">${data.title}</h1>
        <p class="thread_explanation">${data.explanation}</p>
        <p class="thread_date">${data.date}</p>
    </div>
    `
    const element = new DOMParser().parseFromString(string, "text/html").body.firstElementChild
    return element
}