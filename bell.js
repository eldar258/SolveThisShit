function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function familiarizeWithAll() {
    let bell = document.getElementsByClassName("mdi mdi-bell")[0]
    bell.click()
    await delay(100)

    let notifications = document.getElementsByClassName("notification__title")
    for (let i = 0; i < notifications.length; i++) {
        notifications[i].click()
        await delay(10)
        document.getElementsByClassName("familiarized")[0].click()
        await delay(10)
        bell.click()
        await delay(10)
    }
}