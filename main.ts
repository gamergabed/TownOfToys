namespace SpriteKind {
    export const indicader = SpriteKind.create()
    export const Obj = SpriteKind.create()
}
function PlayerSetup () {
    mySprite = sprites.create(assets.image`playerTest`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
function loadTilemap (name: string) {
    for (let col = 0; col <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns) - 1; col++) {
        for (let row = 0; row <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 1; row++) {
            for (let value of blockSettings.readNumberArray(name)) {
                tiles.setTileAt(tiles.getTileLocation(col, row), tileIndex[value])
            }
        }
    }
}
function saveTilemap (name: string) {
    _array = []
    for (let col = 0; col <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns) - 1; col++) {
        for (let row = 0; row <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 1; row++) {
            for (let value of tileIndex) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), value)) {
                    _array.push(tileIndex.indexOf(value))
                }
            }
        }
    }
    blockSettings.writeNumberArray(name, _array)
}
function createObject (col: number, row: number, _type: number) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`tree`)) {
        Object2 = sprites.create(objIndex[0], SpriteKind.Obj)
    } else {
        Object2 = sprites.create(objIndex[1], SpriteKind.Obj)
        tiles.setWallAt(tiles.getTileLocation(col + 1, row), true)
        tiles.setWallAt(tiles.getTileLocation(col - 1, row), true)
    }
    tiles.setWallAt(tiles.getTileLocation(col, row), true)
    tiles.placeOnTile(Object2, tiles.getTileLocation(col, row))
    tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile`)
}
function setupWorld () {
    tiles.setCurrentTilemap(tilemap`waterSplit`)
    tiles.placeOnRandomTile(mySprite, assets.tile`playerHouse`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row + 1))
    for (let value of tiles.getTilesByType(assets.tile`tree`)) {
        createObject(value.column, value.row, 1)
    }
    for (let value of tiles.getTilesByType(assets.tile`playerHouse`)) {
        createObject(value.column, value.row, 1)
    }
}
function Init () {
    if (blockSettings.exists("name")) {
        name = blockSettings.readString("name")
    } else {
        name = game.askForString("Whats your name?", 9)
        blockSettings.writeString("name", name)
    }
    if (blockSettings.exists("gender")) {
        if (blockSettings.readString("gender") == "b") {
            gender = true
        } else {
            gender = false
        }
    } else {
        gender = game.ask("Whats your gender?", "A = Boy, B = Girl")
        if (gender) {
            blockSettings.writeString("gender", "b")
        } else {
            blockSettings.writeString("gender", "g")
        }
    }
    tileIndex = [
    assets.tile`myTile`,
    assets.tile`water`,
    assets.tile`tree`,
    assets.tile`brige`,
    assets.tile`playerHouse`,
    assets.tile`CityCenter`
    ]
    objIndex = [assets.image`myImage`, assets.image`myImage0`]
    objConvert = [2, 4]
}
let objConvert: number[] = []
let gender = false
let name = ""
let objIndex: Image[] = []
let Object2: Sprite = null
let _array: number[] = []
let tileIndex: Image[] = []
let mySprite: Sprite = null
Init()
PlayerSetup()
setupWorld()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Obj)) {
        value.z = value.y
    }
    mySprite.z = mySprite.y
})
