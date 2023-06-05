// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "yoHome":
            case "level3":return tiles.createTilemap(hex`0a000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile7], TileScale.Sixteen);
            case "waterSplit":
            case "waterSplit1":return tiles.createTilemap(hex`2000200001010101010101010101010101010202020101010101010101010101010101010101010101010101010101010101020202010101010101010101010101010101010101010101010101010101010102020201010101010101010101010101010101010101010101010101010101010202020101010101010101010101010101010101010101010101010101010101020202010101010101010104010101010101010105010101010101010101010102020201010101010101010101010101010101010101010101010101010101020202020101010101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101010101010101020202010101010101010101010101010101010101010101010101010101010303030303010101010101010101010101010101010101010101010104010101030303030301010101010101010101010101010101010101010101010101010101020202010101010101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101010101010101020202020101010101010101010104010101010101010101010101010101010101020202020101010101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010104010101010101010101010202020101010101010101010101010101010101010101010101010101010101020202010101010101010101010101010101010101010101010101010101010102020201010101040101010101010101010101010101010101010101010103030303030301010101010101010101010101010101010101010101010101010303030303030101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101010101010101020202010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101010101010101020202020101010101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010202020101010101010101010101010101010101010101010101010101010101020202010101010101010101010101010101010101010101010101010101010102020201010101010101010101010101010101`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
            case "basicHome":
            case "yoHome1":return tiles.createTilemap(hex`0a000a0002000000000000000000000000000000000000000000000000000000000000000004040000000000000004030304000500000000000404000000000000000000000000000000060000000000000707000000000000000000000000000000010100000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "tree":
            case "tile3":return tile3;
            case "brige":
            case "tile4":return tile4;
            case "playerHouse":
            case "tile5":return tile5;
            case "CityCenter":
            case "tile6":return tile6;
            case "exitHome":
            case "tile7":return tile7;
            case "basicBed":
            case "tile8":return tile8;
            case "basicTable":
            case "tile9":return tile9;
            case "basicChair":
            case "tile10":return tile10;
            case "vintageTV":
            case "tile11":return tile11;
            case "water":
            case "tile2":return tile2;
            case "basicChest":
            case "tile13":return tile13;
            case "basicCraft":
            case "tile12":return tile12;
            case "basicTv":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
