"use strict";

class GuestGearDigitalFlora
{
	
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/Z_GuestGear_DigitalFlora/db/`;
		const config = require("../config/config.json");
		
		// add retextures 	       (db,		"original item id",			"new item id",							"bundle path");
		// Armor Vests //
		JustNUCore.AddItemRetexture(db, 	"5c0e625a86f7742d77340f62", "GuestGearDigitalFlora_ZHUK6A", 		"GuestGearDigitalFlora/ArmorVests/zhuk6a.bundle");
		
		// Backpacks //
		JustNUCore.AddItemRetexture(db, 	"5ab8ebf186f7742d8b372e80", "GuestGearDigitalFlora_ATTACK_SSO", 	"GuestGearDigitalFlora/Backpacks/attack_sso.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44c6ae86f7742d1627baea", "GuestGearDigitalFlora_BETA2", 			"GuestGearDigitalFlora/Backpacks/beta2.bundle");
		
		// Misc //
		JustNUCore.AddItemRetexture(db, 	"5d6d3be5a4b9361bc73bc763", "GuestGearDigitalFlora_LSHZ2_AVENTAIL", "GuestGearDigitalFlora/Misc/lshz2dtm_aventail.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d6d3943a4b9360dbc46d0cc", "GuestGearDigitalFlora_LSHZ2_COVER", 	"GuestGearDigitalFlora/Misc/lshz2dtm_damper.bundle");
		
		// Rigs //
		JustNUCore.AddItemRetexture(db, 	"5e4ac41886f77406a511c9a8", "GuestGearDigitalFlora_CPCMOD2", 		"GuestGearDigitalFlora/Rigs/arscpc.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e722886f7740458316a57", "GuestGearDigitalFlora_ANA_M1", 		"GuestGearDigitalFlora/Rigs/m1.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ca20abf86f77418567a43f2", "GuestGearDigitalFlora_TRITON", 		"GuestGearDigitalFlora/Rigs/triton.bundle");
		
		// add clothing
		// add tops
		JustNUCore.AddTop(db, "GuestGearDigitalFlora_InfilTop",		"GuestGearDigitalFlora/Tops/infiltrator_top.bundle", 	"GuestGearDigitalFlora/Hands/infiltrator_hands.bundle",		"5d1f5b3f86f7744bcd1345a2");
		JustNUCore.AddTop(db, "GuestGearDigitalFlora_GorkaSSOTop",	"GuestGearDigitalFlora/Tops/ghostmarksman_top.bundle", 	"GuestGearDigitalFlora/Hands/ghostmarksman_hands.bundle",	"5d1f5ac086f7744bcd1345a0");
		JustNUCore.AddTop(db, "GuestGearDigitalFlora_TigrTop",		"GuestGearDigitalFlora/Tops/tigr_top.bundle", 			"GuestGearDigitalFlora/Hands/tigr_hands.bundle",			"5e9da26286f7741d2e3424a5");
		
		// add bottoms
		JustNUCore.AddBottom(db, "GuestGearDigitalFlora_InfilBottom",		"GuestGearDigitalFlora/Bottoms/cryepresision_bottom.bundle");
		JustNUCore.AddBottom(db, "GuestGearDigitalFlora_GorkaSSOBottom",	"GuestGearDigitalFlora/Bottoms/gorkasso_bottom.bundle");
		JustNUCore.AddBottom(db, "GuestGearDigitalFlora_TigrBottom",		"GuestGearDigitalFlora/Bottoms/tigr_bottom.bundle");
		
		// add trade offers
		if (config.EnableTradeOffers) {
			JustNUCore.CopyTradeOffers("5c0e625a86f7742d77340f62", "GuestGearDigitalFlora_ZHUK6A");
			JustNUCore.CopyTradeOffers("5ab8ebf186f7742d8b372e80", "GuestGearDigitalFlora_ATTACK_SSO");
			JustNUCore.CopyTradeOffers("5b44c6ae86f7742d1627baea", "GuestGearDigitalFlora_BETA2");
			JustNUCore.CopyTradeOffers("5d6d3be5a4b9361bc73bc763", "GuestGearDigitalFlora_LSHZ2_AVENTAIL");
			JustNUCore.CopyTradeOffers("5d6d3943a4b9360dbc46d0cc", "GuestGearDigitalFlora_LSHZ2_COVER");
			JustNUCore.CopyTradeOffers("5e4ac41886f77406a511c9a8", "GuestGearDigitalFlora_CPCMOD2");
			JustNUCore.CopyTradeOffers("5c0e722886f7740458316a57", "GuestGearDigitalFlora_ANA_M1");
			JustNUCore.CopyTradeOffers("5ca20abf86f77418567a43f2", "GuestGearDigitalFlora_TRITON");
		}
		
		if (config.AddToBots) {
			// add items to bots
			// Armor Vests //
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.ArmorVest.push(
				"GuestGearDigitalFlora_ZHUK6A"
			);
			DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.ArmorVest.push(
				"GuestGearDigitalFlora_ZHUK6A"
			);
			
			// Backpacks //
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.Backpack.push(
				"GuestGearDigitalFlora_ATTACK_SSO",
				"GuestGearDigitalFlora_BETA2"
			);
			DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.Backpack.push(
				"GuestGearDigitalFlora_ATTACK_SSO",
				"GuestGearDigitalFlora_BETA2"
			);
			
			// Rigs //
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_CPCMOD2",
				"GuestGearDigitalFlora_ANA_M1",
				"GuestGearDigitalFlora_TRITON"
			);
			DatabaseServer.tables.bots.types["bossgluhar"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_ANA_M1"
			);
			DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_ANA_M1",
				"GuestGearDigitalFlora_TRITON"
			);
			DatabaseServer.tables.bots.types["assault"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_TRITON"
			);
			DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_TRITON"
			);
			DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_TRITON"
			);
			DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_TRITON"
			);
			DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_TRITON"
			);
			DatabaseServer.tables.bots.types["marksman"].inventory.equipment.TacticalVest.push(
				"GuestGearDigitalFlora_TRITON"
			);
			
			// MoreVariety support
			if (VFS.exists(`user/mods/MoreVariety/package.json`)) {
				// ruafassault
				DatabaseServer.tables.bots.types["ruafassault"].inventory.equipment.ArmorVest.push(
					"GuestGearDigitalFlora_ZHUK6A"
				);
				DatabaseServer.tables.bots.types["ruafassault"].inventory.equipment.Backpack.push(
					"GuestGearDigitalFlora_ATTACK_SSO",
					"GuestGearDigitalFlora_BETA2"
				);
				DatabaseServer.tables.bots.types["ruafassault"].inventory.equipment.TacticalVest.push(
					"GuestGearDigitalFlora_CPCMOD2",
					"GuestGearDigitalFlora_ANA_M1",
					"GuestGearDigitalFlora_TRITON"
				);
				// ruafrecon
				DatabaseServer.tables.bots.types["ruafrecon"].inventory.equipment.Backpack.push(
					"GuestGearDigitalFlora_BETA2"
				);
				DatabaseServer.tables.bots.types["ruafrecon"].inventory.equipment.TacticalVest.push(
					"GuestGearDigitalFlora_TRITON",
					"GuestGearDigitalFlora_ANA_M1"
				);
			};
		}
		
		// Modify quests
		if (config.EnableQuestChanges) {
			const armoredVests = [
				[
					"GuestGearDigitalFlora_ZHUK6A"
				],
				[
					"GuestGearDigitalFlora_CPCMOD2"
				],
				[
					"GuestGearDigitalFlora_ANA_M1"
				]
			];
			const armoredGear = [
				[
					"GuestGearDigitalFlora_ZHUK6A"
				],
				[
					"GuestGearDigitalFlora_CPCMOD2"
				],
				[
					"GuestGearDigitalFlora_ANA_M1"
				]
			];
			
			// The survivalist path. Unprotected, but dangerous
			if (DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"]) {
				const UnprotectedButDangerous = DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...JsonUtil.clone(UnprotectedButDangerous),
					...armoredVests
				];
			};
			
			// Swift One
			if (DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"]) {
				const SwiftOne = DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...JsonUtil.clone(SwiftOne),
					...armoredGear
				];
			};
		}
	}
}

module.exports = GuestGearDigitalFlora;