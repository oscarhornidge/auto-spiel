input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let Speed_4 = 0
let Auto_4: game.LedSprite = null
let Speed_3 = 0
let Auto_3: game.LedSprite = null
let Speed_2 = 0
let Auto_2: game.LedSprite = null
let Speed_1 = 0
let Auto_1: game.LedSprite = null
let Speed_0 = 0
let Auto_0: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(500, 12000))
    Auto_0 = game.createSprite(0, 0)
    Speed_0 = randint(500, 1500)
    for (let index = 0; index < 5; index++) {
        basic.pause(Speed_0)
        Auto_0.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.isTouching(Auto_0)) {
        game.gameOver()
    }
    Auto_0.delete()
    if (game.isRunning()) {
        game.setScore(game.score() + 1)
    }
})
basic.forever(function () {
    basic.pause(randint(500, 8000))
    Auto_1 = game.createSprite(1, 0)
    Speed_1 = randint(500, 1500)
    for (let index = 0; index < 5; index++) {
        basic.pause(Speed_1)
        Auto_1.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.isTouching(Auto_1)) {
        game.gameOver()
    }
    Auto_1.delete()
    if (game.isRunning()) {
        game.setScore(game.score() + 1)
    }
})
basic.forever(function () {
    basic.pause(randint(500, 5000))
    Auto_2 = game.createSprite(2, 0)
    Speed_2 = randint(500, 1500)
    for (let index = 0; index < 5; index++) {
        basic.pause(Speed_2)
        Auto_2.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.isTouching(Auto_2)) {
        game.gameOver()
    }
    Auto_2.delete()
    if (game.isRunning()) {
        game.setScore(game.score() + 1)
    }
})
basic.forever(function () {
    basic.pause(randint(500, 3000))
    Auto_3 = game.createSprite(3, 0)
    Speed_3 = randint(500, 1500)
    for (let index = 0; index < 5; index++) {
        basic.pause(Speed_3)
        Auto_3.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.isTouching(Auto_3)) {
        game.gameOver()
    }
    Auto_3.delete()
    if (game.isRunning()) {
        game.setScore(game.score() + 1)
    }
})
basic.forever(function () {
    basic.pause(randint(500, 10000))
    Auto_4 = game.createSprite(4, 0)
    Speed_4 = randint(500, 1500)
    for (let index = 0; index < 5; index++) {
        basic.pause(Speed_4)
        Auto_4.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.isTouching(Auto_4)) {
        game.gameOver()
    }
    Auto_4.delete()
    if (game.isRunning()) {
        game.setScore(game.score() + 1)
    }
})
