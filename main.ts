function createDart () {
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . 6 c 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . 5 6 6 6 5 . . . . . . 
        . . . . 5 5 2 2 2 5 5 . . . . . 
        . . . . 5 5 6 6 6 5 5 . . . . . 
        . . . . 5 5 2 2 2 5 5 . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        `, SpriteKind.Player, 80, 110)
    myDart.controlWithArrowKeys()
    myDart.setTrace()
    myDart.angle = 75
    myDart.angle += 15
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
let myDart: Dart = null
Background.testBlock()
Balloons.importBalloons()
Balloons.balloonGrid()
Animation.balloonAnimation()
createDart()
