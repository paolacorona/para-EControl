let index = 0
input.onButtonPressed(Button.A, function () {
    index = 0
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index)
        basic.pause(100)
    }
})
