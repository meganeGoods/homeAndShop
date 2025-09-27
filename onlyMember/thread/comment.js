function commentComponent(data){
    let string = `
    <div class="comment">
        <p class="comment_messanger">${data.messanger}</p>
        <p class="comment_date">${data.date}</p>
        <p class="comment_text">${data.text}</p>
    </div>
    `
    if(data.text == "locked"){
        string = `
        <div class="command">
            <p class="commandMessanger">―― ${data.messanger}によってロックされました ――</p>
        </div>`
    }
    else if(data.text == "closed"){
        string = `
        <div class="command">
            <p class="commandMessanger">―― ${data.messanger}によって閉じられました ――</p>
        </div>`
    }
    const element = new DOMParser().parseFromString(string, "text/html").body.firstElementChild
    return element
}