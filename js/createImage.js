const createImage = (item, parent) => {
    const img = new Image();
    img.src = item.url
    img.setAttribute("class", "gallery__img")
    img.setAttribute("alt", item.name)
    img.setAttribute("onclick", "!document.fullscreenElement ? this.requestFullscreen() : document.exitFullscreen()")
    parent.prepend(img);
}

export default createImage
