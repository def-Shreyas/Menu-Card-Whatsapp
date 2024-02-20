// function composeEmail(menuIds, menuTitles, selectedItems) {
//     const recipientEmail = 'shreyasmoolya2003@gmail.com';
//     const subject = 'New Order Received';
//     let emailBody = 'New order received:\n';

//     selectedItems.forEach((items, index) => {
//         emailBody += `${menuTitles[index]}: \n${items}\n\n`;
//     });

//     const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
//     window.location.href = mailtoLink;
// }

function composeEmail(menuIds, menuTitles, selectedItems) {
    const recipientEmail = 'shreyasmoolya2003@gmail.com';
    const subject = 'New Order Received';
    let emailBody = 'New order received:\n';

    selectedItems.forEach((items, index) => {
        emailBody += `${menuTitles[index]}: \n${items.join('\n')}\n\n`; // Add join('\n') to separate items with a line break
    });

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}

// ... (rest of the code remains unchanged)


function submitOrder() {
    let menuIds = ["lunch", "additional", "evening", "hightea", "starters", "dinner"];
    let menuTitles = [
        document.getElementById("lunch").textContent,
        document.getElementById("additional").textContent,
        document.getElementById("evening").textContent,
        document.getElementById("hightea").textContent,
        document.getElementById("starters").textContent,
        document.getElementById("dinner").textContent
    ];

    let selectedItems = [
        getSelectedItems("#lunchmenu input:checked"),
        getSelectedItems("#additionalmenu input:checked"),
        getSelectedItems("#eveningmenu input:checked"),
        getSelectedItems("#teamenu input:checked"),
        getSelectedItems("#startermenu input:checked"),
        getSelectedItems("#dinnermenu input:checked")
    ];

    // Log the selected items for debugging
    console.log('Selected Items:', selectedItems);

    composeEmail(menuIds, menuTitles, selectedItems,peopleCount);
}

function getSelectedItems(selector) {
    let items = document.querySelectorAll(selector);
    return Array.from(items).map(item => item.nextElementSibling.textContent);
}