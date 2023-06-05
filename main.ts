namespace SpriteKind {
    export const indicader = SpriteKind.create()
    export const Obj = SpriteKind.create()
}
/**
 * Furniture Styles:
 * 
 * Basic
 * 
 * Vintage
 * 
 * Modern
 * 
 * Cute
 * 
 * Toys
 */
/**
 * Game Plans:
 * 
 * Animations
 * 
 * Tile Data
 * 
 * Furniture Types
 * 
 * Title Screen
 * 
 * Online Gameplay (Maybe)
 */
/**
 * Hi This is a note from TheOminousWolf This project is cool, as it contains stuff like Dynamic Depth and the saving of Tilemaps! You shoud look at the code of this project, who knows, maybe this will be useful! Well have fun! Oh! and there will be Comments that explain things, Other wise you will be as confused as someone learning redstone in minecraft.
 */
function PlayerSetup () {
    mySprite = sprites.create(assets.image`tempImage`, SpriteKind.Player)
    controller.moveSprite(mySprite, 75, 75)
    scene.cameraFollowSprite(mySprite)
    if (gender) {
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`BidleDown`,
        500,
        characterAnimations.rule(Predicate.FacingDown)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`BidleLeft`,
        200,
        characterAnimations.rule(Predicate.FacingLeft)
        )
    } else {
    	
    }
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
// This Function is one of the ground breaking parts of this game, and yet, its simple. First we need a local variable (A Temporary Variable as some will call it) of an array. Next We have 3 For loops. One, for tilemap column, One for rows and one for the tile index (Head towrdes the INIT Function for what it is). After that we have an If Statement That checks if the tile at the col and row is equal to the current value of the tileIndex, If it is then add the index of the value of the third index and add it too the temp array. After all of that, Set a setting of a name of the saved world, to the current number array. I know it sounds complacaded but in reality, Its simpler than path finding!
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
    for (let value of tiles.getTilesByType(assets.tile`water`)) {
        tiles.setWallAt(value, true)
    }
}
function Init () {
    if (!(blockSettings.exists("name"))) {
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
let name = ""
let objIndex: Image[] = []
let Object2: Sprite = null
let _array: number[] = []
let tileIndex: Image[] = []
let gender = false
let mySprite: Sprite = null
Init()
if (game.ask("Clear Game?", "This is Permement!")) {
    blockSettings.clear()
    game.reset()
}
PlayerSetup()
setupWorld()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Obj)) {
        value.z = value.y
    }
    mySprite.z = mySprite.y
})
