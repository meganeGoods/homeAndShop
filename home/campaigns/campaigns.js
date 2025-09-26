function campaignsComponent(datum){
    const string = `
    <div class="campaign_ImgContainer">
        <img class="campaignImg" src=${datum.imgPath} alt=${datum.alt} width="100px"/>
    </div>`
    const element = new DOMParser().parseFromString(string, "text/html").body.firstElementChild
    return element
}