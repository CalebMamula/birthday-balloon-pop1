### @explicitHints true
# Birthday Balloon Pop!


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"P4(`CNLh^)P:D9Kpa+R5\": {\n        \"data\": \"hwQMABAAAAAADw8AAAAAAADwAAAA8A8AAP//APAPAADwv/0P//8P8P//Ef/////////x/////////9v/////AP//8f////////8R///////wv/0P//8P8AD//wDwDwAAAAAAAADwDwA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ninjaSprite\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"P4(`CNLh^)P:D9Kpa+R5\":\n            case \"ninjaSprite\":return img`\n. . . . f f f f f . . . \n. . . f f f f f f f . . \nf . f f f f f f f f f . \n. f f b f f f f f b f . \nf . f d 1 1 b 1 1 d f . \n. . f f 1 f d f 1 f f . \n. . . f f f f f f f . . \n. . . . f f f f f . . . \n. . . f f f f f f f . . \n. . f f f f f f f f f . \n. . f f f f f f f f f . \n. f . f f f f f f f . f \n. f . f f f f f f f . f \n. . . . f f f f f . . . \n. . . . f f . f f . . . \n. . . f f f . f f f . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"W)t)RD5T*{kylRj-;L]a\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"5bdv9B~8K.:##DQEJ`|g\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"HLjMyi$oA.5AZIiJn#i;\">Object</variable><variable type=\"KIND_SpriteKind\" id=\"$n4#WqCz^D~`PmLUo]tx\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"(uYX/Oj@Oq5d3SRMzGa8\">Enemy</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"W)t)RD5T*{kylRj-;L]a\">mySprite</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`ninjaSprite`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"P4(`CNLh^)P:D9Kpa+R5\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value></block></statement></block></xml>",
  "main.ts": "let mySprite = sprites.create(assets.image`ninjaSprite`, SpriteKind.Player)\n",
  "pxt.json": "{\n    \"name\": \"Ninja Sprite\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}


```


```template
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
}


```



```blocks

myDart = darts.create(assets.image`dart`, SpriteKind.Player, 80, 110)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
    createDart()
})
list = [0, 1]
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    
})

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
    

let myDart: Dart = null
Background.testBlock()
Balloons.importBalloons()
Balloons.balloonGrid()
Balloons.updateBalloons()
Animation.balloonAnimation()
createDart()

forever(function () {
	
})
info.onLifeZero(function () {
   
})
```

```blockconfig.global
forever(function(){
info.setScore(1000 - game.runtime() / 100)
)}
info.onLifeZero(function () {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
myDart = darts.create(assets.image`dart`, SpriteKind.Player, 80, 110)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)

})

    myDart.angle = 75
    myDart.angle += 15
```

```customts
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.destroy()
})
info.setLife(50)
game.setGameOverMessage(true, "Your score is " + info.score())
```

## Time To Make A Birthday Game! @showdialog
Birthday Game
![Game Example](https://raw.githubusercontent.com/CalebMamula/cn-ninja-invaders-gbs/master/images./ninja-invader-gif.gif)


