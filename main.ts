motor.servo(motor.Servos.S1, 0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        motor.servo(motor.Servos.S1, 90)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        motor.servo(motor.Servos.S1, 0)
    }
})
