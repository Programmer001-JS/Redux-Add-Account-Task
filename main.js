let tbody = document.querySelector("tbody");
let accountsBtn = document.querySelector("#accountsBtn");
let addAccountsBtn = document.querySelector("#addAccountsBtn");
let accountsView = document.querySelector("#accountsView");
let addAccountsView = document.querySelector("#addAccountsView");
let saveBtn = document.querySelector("#saveBtn")

window.addEventListener('load', () => {
    store.dispatch(start)
})

store.subscribe(function () {
    displayAccounts();
    changeView();
})

addAccountsBtn.addEventListener('click', function () {
    store.dispatch(displayAddAccountsAction)
})

accountsBtn.addEventListener('click', function () {
    store.dispatch(dispalyAccountsAction)
})

saveBtn.addEventListener('click', function () {
    store.dispatch(addAccount({
        id: document.querySelector('[placeholder="id"]').value,
        name: document.querySelector('[placeholder="name"]').value,
        phone: document.querySelector('[placeholder="phone"]').value,
        email: document.querySelector('[placeholder="email"]').value
    }));
    store.dispatch(dispalyAccountsAction)
})

function changeView() {
    let view = store.getState().display;
    if (view == 1) {
        accountsView.style.display = "block";
        addAccountsView.style.display = "none";
    } else {
        accountsView.style.display = "none";
        addAccountsView.style.display = "block";
    }
}


function displayAccounts() {
    let accounts = store.getState().accounts;
    let text = ``;
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        text += `
        <tr>
            <td>${account.id}</td>
            <td>${account.name}</td>
            <td>${account.phone}</td>
            <td>${account.email}</td>
        </tr>
        `
    }
    tbody.innerHTML = text;
}
