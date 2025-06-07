radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("grid", receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    current += 1
    if (current > 9) {
        current = 1
    }
    plotGrid(current)
})
input.onButtonPressed(Button.B, function () {
    serial.writeValue("grid", current)
    plotGrid(current)
})
function plotGrid (n: number) {
    basic.clearScreen()
    // x: 0, 2, 4
    x = (n - 1) % 3 * 2
    // y: 4, 2, 0
    y = 4 - Math.floor((n - 1) / 3) * 2
    led.plot(x, y)
}
let y = 0
let x = 0
let current = 0
current = 1
radio.setGroup(1)
