function messageComponent(data,profileImg){
    const img_string = data.figure.map((x) => `<img class="attachedFig" src="${x}" />`).join("")
    const string = `
    <div class="messageWrapper">
        <div class="header">
            <div class="profileImgContainer">
                <img class="profileImg" src="${profileImg}" width=20px/>
            </div>
            <span class="M_messanger">${data.messanger}</span> <span class="M_date">${data.date}</span>
        </div>
        <p>${data.message}</p>
        ${img_string}
    </div>
    `
    const element = new DOMParser().parseFromString(string, "text/html").body.firstElementChild
    return element
}