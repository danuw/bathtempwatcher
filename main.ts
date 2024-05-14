input.onButtonPressed(Button.A, function () {
    ThresholdTemp = ThresholdTemp + 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (ThresholdTemp))
})
input.onButtonPressed(Button.B, function () {
    ThresholdTemp = ThresholdTemp - 1
})
let ThresholdTemp = 0
ThresholdTemp += 37
basic.forever(function () {
    led.plotBarGraph(
    DS18B20.TemperatureNumber(DS18B20.pin.pin0),
    100
    )
    basic.showString(DS18B20.TemperatureString(DS18B20.pin.pin0))
    basic.pause(2000)
    if (DS18B20.TemperatureNumber(DS18B20.pin.pin0) <= ThresholdTemp) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
    }
})
