function shareOnWhatsApp(peopleCount, comments, menuIds, menuTitles, selectedItems) {
    let content = "New Order Received\n\n";
    content += `People Count:${peopleCount}\n\n`;
    content += `Suggestions:${comments}\n\n`;

    selectedItems.forEach((items, index) => {
        content += `\n${menuTitles[index]}: \n${items.join('\n')}\n\n`;
    });

    let whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(content);
    window.location.href = whatsappUrl;
}

function lunchnon(){
    let lunchMenuItems=document.querySelectorAll("#lunchmenu-non input:checked")

    if (lunchMenuItems.length > 1){
        alert("Extra Items chargeable")
    }
}

function lunchveg(){
    let lunchMenuItems=document.querySelectorAll("#lunchmenu-veg input:checked")

    if (lunchMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

function lunchdal(){
    let lunchMenuItems=document.querySelectorAll("#lunchmenu-dal input:checked");

    if (lunchMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

function lunchrice(){
    let lunchMenuItems=document.querySelectorAll("#lunchmenu-rice input:checked");

    if (lunchMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

function lunchbread(){
    let lunchMenuItems=document.querySelectorAll("#lunchmenu-bread input:checked");

    if (lunchMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

//Dinner

function dinnernon(){
    let dinnerMenuItems=document.querySelectorAll("#dinnermenu-non input:checked")

    if (dinnerMenuItems.length > 1){
        alert("Extra Items chargeable")
    }
}

function dinnerveg(){
    let dinnerMenuItems=document.querySelectorAll("#dinnermenu-veg input:checked")

    if (dinnerMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

function dinnerdal(){
    let dinnerMenuItems=document.querySelectorAll("#dinnermenu-dal input:checked");

    if (dinnerMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

function dinnerrice(){
    let dinnerMenuItems=document.querySelectorAll("#dinnermenu-rice input:checked");

    if (dinnerMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

function dinnerbread(){
    let dinnerMenuItems=document.querySelectorAll("#dinnermenu-bread input:checked");

    if (dinnerMenuItems.length > 1){
        alert("Extra items chargeable")
    }
}

function submitOrder() {
    let peopleCount = document.getElementById("people").value;
    let comments = document.getElementById("comments").value;
    let menuIds = ["lunch", "additional", "evening", "hightea", "starters", "dinner"];
    let menuTitles = menuIds.map(id => document.getElementById(id).textContent);
    let selectedItems = menuIds.map(id => getSelectedItems(`#${id}menu input:checked`));

    console.log('People Count: ', peopleCount);
    console.log('Suggestions: ', comments);
    console.log('Selected Items:', selectedItems);

    for (let i = 0; i < menuIds.length; i++) {
        if (!selectedItems[i] || selectedItems[i].length === 0) {
            console.error(`Selected items for ${menuTitles[i]} is empty or undefined.`);
            // You might want to handle this error case gracefully.
        }
    }

    let whatsappButton = document.getElementById("whatsapp-btn");
    if (whatsappButton) {
        whatsappButton.onclick = function () {
            shareOnWhatsApp(peopleCount, comments, menuIds, menuTitles, selectedItems);
        };
    } else {
        console.error("Button with ID 'whatsapp-btn' not found.");
    }
}

function getSelectedItems(selector) {
    let items = document.querySelectorAll(selector);
    return Array.from(items).map(item => item.nextElementSibling.textContent);
}
