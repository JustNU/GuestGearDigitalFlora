class Mod
{
    constructor()
    {
		Logger.info("Loading: GuestGear - Digital Flora");
		
		ModLoader.onLoad["GuestGearDigitalFlora"] = require("./src/guestgeardigitalflora.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();