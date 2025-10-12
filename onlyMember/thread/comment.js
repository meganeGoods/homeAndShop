function commentComponent(data, profileImg){
    let string = `
    <div class="comment">
        <div class="header">
            <div class="profileImgContainer">
                <img class="profileImg" src="${profileImg}" width=20px/>
            </div>
            <span class="comment_messanger">${data.messanger}</span>
            <span class="comment_date">${data.date}</span>
        </div>
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