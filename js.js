async function SolveThisShit() {
    let elements = document.getElementsByClassName("category_category__content__3Bkjb")[0].children[0].children
    let mapa = generateMapa(elements.length)

    let isResolve = function() {
        let solveIndicator = document.getElementsByClassName("lesson-result-row")[0].children[0].children[0]
        return solveIndicator.className !== "mdi mdi-close"
    }

    while (!isResolve()) {
        clickByReset()
        await delay(1000)

        for (let i = 0; i < elements.length; i++) {
            if (!mapa[i][1]) {
                mapa[i][0]++
            }
            clickByCheckBox(elements[i], mapa[i][0])
        }
        clickBySend()
        await delay(1000)

        for (let i = 0;	i < elements.length; i++) {
            mapa[i] = [mapa[i][0], isResolveThis(elements[i])]
        }
    }
}

function clickBySend() {
    document.getElementsByClassName("send-result-btn")[0].click()
}

function clickByCheckBox(el, variant) {
    let tmp = el.children[1].children[variant]
    if (typeof tmp === 'undefined') {
        console.log("На вопрос: ", el.children[0].innerText, "- НЕТ ПРАВИЛЬНОГО ВАРИАНТА")
    }
    tmp.children[1].click()
}

function clickByReset() {
    document.getElementsByClassName("reset-value-btn")[0].click()
}

function generateMapa(n) {
    let mapa = new Map()
    for (let i = 0;	i < n; i++) {
        mapa[i] = [-1, false]
    }
    return mapa
}

function isResolveThis(element) {
    return element.children[0].children[0].className === "mdi mdi-check test_icon__2hX3h test_icon_green__1-6uq test_question__icon__3L4Os"
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
