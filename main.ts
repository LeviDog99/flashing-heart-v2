let Sound = 0
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
