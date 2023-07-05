const createCard = (items) => {

    let innerHTML = ''

    items.forEach(item => {

        innerHTML +=
            `            
            <article id="${item.name}" 
                class="hidden__text picture__card" onmouseover = "this.classList.remove('hidden__text')" 
                onmouseout = "this.classList.add('hidden__text')"
            >
                <div class="picture__note">
                    <h3 class="picture__title">${item.name}</h3>
                    <p class="picture__description" >${item.description}</p>
                </div>
            </article>`
    })

    return innerHTML
}

export default createCard