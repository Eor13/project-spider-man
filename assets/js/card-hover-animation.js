function handleMouseEnter() { 
    this.classList.add("s-card--hovered");
    document.body.id =``
    document.body.id =`${this.id}-hovered`;
    console.log(this.id)
}
function handleMouseLeave() { 
    this.classList.remove("s-card--hovered");
    document.body.id = ``; 
}

const addEventListenersToCards =() => {
    const cardElements =document.querySelectorAll(".s-card");

    for(let i =0; i <cardElements.length;i++){
        const card = cardElements[i];
        card.addEventListener("mouseenter",handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    };
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards,false);