let Sound = 0
input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
function doSomething () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.forever(function () {
    doSomething()
    while (false) {
        Sound = input.soundLevel()
    }
})
