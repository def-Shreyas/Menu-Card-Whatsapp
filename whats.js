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

function lunchNon(){

    if (!lunchNon.alertShown){
        let lunchMenuItems=document.querySelectorAll("#lunchmenu-non input:checked");

        if (lunchMenuItems.length > 1){
            alert("Extra items chargeable")

            lunchNon.alertShown=true;
        }
    }
}

function lunchVeg(){

    if (!lunchVeg.alertShown){
        let lunchMenuItems=document.querySelectorAll("#lunchmenu-veg input:checked");

        if (lunchMenuItems.length > 1){
            alert("Extra items chargeable")

            lunchVeg.alertShown=true;
        }
    }
}

function lunchDal(){

    if (!lunchDal.alertShown){
        let lunchMenuItems=document.querySelectorAll("#lunchmenu-dal input:checked");

        if (lunchMenuItems.length > 1){
            alert("Extra items chargeable")

            lunchDal.alertShown=true;
        }
    }
}

function lunchRice(){

    if (!lunchRice.alertShown){
        let lunchMenuItems=document.querySelectorAll("#lunchmenu-rice input:checked");

        if (lunchMenuItems.length > 1){
            alert("Extra items chargeable")

            lunchRice.alertShown=true;
        }
    }
}

function lunchBread(){

    if (!lunchBread.alertShown){
        let lunchMenuItems=document.querySelectorAll("#lunchmenu-bread input:checked");

        if (lunchMenuItems.length > 1){
            alert("Extra items chargeable");

            lunchBread.alertShown=true;
        }
    }
}

function startersVeg(){

    if (!startersVeg.alertShown){
        let starterMenuItems=document.querySelectorAll("#startermenu-veg input:checked");

        if (starterMenuItems.length > 1){
            alert("Extra items chargeable");

            startersVeg.alertShown=true;
        }
    }
}

function startersNon(){

    if (!startersNon.alertShown){
        let starterMenuItems=document.querySelectorAll("#startermenu-non input:checked");

        if (starterMenuItems.length > 1){
            alert("Extra items chargeable");

            startersNon.alertShown=true;
        }
    }
}

function dinnerNon(){

    if (!dinnerNon.alertShown){
        let dinnerMenuItems=document.querySelectorAll("#dinnermenu-non input:checked");

        if (dinnerMenuItems.length > 1){
            alert("Extra items chargeable");

            dinnerNon.alertShown=true;
        }
    }
}

function dinnerVeg(){

    if (!dinnerVeg.alertShown){
        let dinnerMenuItems=document.querySelectorAll("#dinnermenu-veg input:checked");

        if (dinnerMenuItems.length > 1){
            alert("Extra items chargeable");

            dinnerVeg.alertShown=true;
        }
    }
}

function dinnerDal(){

    if (!dinnerDal.alertShown){
        let dinnerMenuItems=document.querySelectorAll("#dinnermenu-dal input:checked");

        if (dinnerMenuItems.length > 1){
            alert("Extra items chargeable");

            dinnerDal.alertShown=true;
        }
    }
}

function dinnerRice(){

    if (!dinnerRice.alertShown){
        let dinnerMenuItems=document.querySelectorAll("#dinnermenu-rice input:checked");

        if (dinnerMenuItems.length > 1){
            alert("Extra items chargeable");

            dinnerRice.alertShown=true;
        }
    }
}

function dinnerBread(){

    if (!dinnerBread.alertShown){
        let dinnerMenuItems=document.querySelectorAll("#dinnermenu-bread input:checked");

        if (dinnerMenuItems.length > 1){
            alert("Extra items chargeable");

            dinnerBread.alertShown=true;
        }
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
        whatsappButton.addEventListener("click", () => {
            shareOnWhatsApp(peopleCount, comments, menuIds, menuTitles, selectedItems);
        });
    } else {
        console.error("Button with ID 'whatsapp-btn' not found.");
    }
}

function getSelectedItems(selector) {
    let items = document.querySelectorAll(selector);
    return Array.from(items).map(item => item.nextElementSibling.textContent);
}
