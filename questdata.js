const leveling_data = {
  normal: {
    1: {
      title: "Act 1: The Sightless Eye",
      steps: [
        { text: "Den of Evil", location: "Blood Moor", tips: "Clear all monsters for +1 skill point" },
        { text: "Return to Akara", location: "Rogue Encampment", tips: "Collect skill point reward" },
        { text: "Get Cold Plains waypoint", location: "Blood Moor → Cold Plains ◆", tips: "First waypoint of the game" },
        { text: "Blood Raven", location: "Cold Plains ◆ → Burial Grounds", tips: "Hire Rogue mercenary after quest. Blood Raven uses Fire Arrow" },
        { text: "Return to Kashya", location: "Rogue Encampment", tips: "Unlock Rogue mercenaries" },
        { text: "Countess (Optional)", location: "Cold Plains ◆ → Black Marsh ◆ → Forgotten Tower → Tower Cellar 1-5", tips: "Farm runes. Countess is on level 5", layout: "Follow left wall in Tower levels" },
        { text: "Get Scroll of Inifuss", location: "Cold Plains ◆ → Stony Field ◆ → Underground Passage → Dark Wood", tips: "Scroll is in Tree of Inifuss", layout: "Dark Wood has 3 exits - tree spawns randomly" },
        { text: "Rescue Deckard Cain", location: "Stony Field ◆ → Tristram via Cairn Stones", tips: "Use translated scroll at Cairn Stones. Free identify forever" },
        { text: "Horadric Malus", location: "Black Marsh ◆ → Tamoe Highland → Monastery Gate → Outer Cloister ◆ → Barracks", tips: "Socket quest reward from Charsi", layout: "Barracks is linear" },
        { text: "Tools of the Trade complete", location: "Rogue Encampment", tips: "Charsi can socket one item per difficulty" },
        { text: "Get Jail waypoint", location: "Outer Cloister ◆ → Barracks → Jail 1-3 (◆ 3)", tips: "Waypoint is on level 3" },
        { text: "Inner Cloister waypoint", location: "Jail 3 ◆ → Inner Cloister ◆", tips: "Fixed layout area" },
        { text: "Kill Andariel", location: "Inner Cloister ◆ → Cathedral → Catacombs 1-4", tips: "Poison resist essential. Andariel is on Catacombs level 4. +2 all skills reward" },
        { text: "Talk to Warriv", location: "Rogue Encampment", tips: "Travel to Act 2" }
      ]
    },
    2: {
      title: "Act 2: The Secret of the Vizjerei",
      steps: [
        { text: "Radament's Lair", location: "Lut Gholein → Sewers 1-3 (◆ 2)", tips: "First waypoint is in Sewers level 2. +1 skill point reward" },
        { text: "Return to Atma", location: "Lut Gholein", tips: "Collect skill point" },
        { text: "Get Horadric Scroll", location: "Sewers 2 ◆", tips: "Radament drops the scroll" },
        { text: "Horadric Staff quest", location: "Sewers 2 ◆ → Dry Hills ◆ → Halls of the Dead 1-3", tips: "Horadric Cube is on level 3. Cube has unlimited uses" },
        { text: "Staff of Kings", location: "Dry Hills ◆ → Far Oasis ◆ → Maggot Lair 1-3", tips: "Staff is on level 3", layout: "Narrow tunnels - hard for larger characters" },
        { text: "Amulet of the Viper", location: "Far Oasis ◆ → Lost City ◆ → Valley of Snakes → Claw Viper Temple 1-2", tips: "Amulet is on altar level 2. Destroy altar" },
        { text: "Combine Staff", location: "Horadric Cube", tips: "Staff of Kings + Amulet = Horadric Staff" },
        { text: "Palace Cellar waypoint", location: "Lut Gholein → Harem 1-2 → Palace Cellar ◆", tips: "Waypoint for easy access to Arcane Sanctuary" },
        { text: "Arcane Sanctuary", location: "Palace Cellar ◆ → Arcane Sanctuary ◆", tips: "Find Summoner at end of one platform. Kill for portal and symbol" },
        { text: "Canyon of the Magi", location: "Lost City ◆ → Canyon of the Magi ◆", tips: "Enter tomb matching Summoner's symbol" },
        { text: "Kill Duriel", location: "Canyon of the Magi ◆ → Tal Rasha's Tomb → Duriel's Chamber", tips: "Use Horadric Staff on Orifice. Holy Freeze aura - thaw potions help. +5 all resist reward" },
        { text: "Talk to Jerhyn", location: "Lut Gholein", tips: "Travel to Act 3" }
      ]
    },
    3: {
      title: "Act 3: The Infernal Gate",
      steps: [
        { text: "Golden Bird quest", location: "Spider Forest ◆", tips: "Optional. Kill unique monsters for Jade Figurine. Gives +20 life permanently" },
        { text: "Khalim's Eye", location: "Spider Forest ◆ → Spider Cavern", tips: "Eye is in Spider Cavern" },
        { text: "Khalim's Brain", location: "Spider Forest ◆ → Flayer Jungle ◆ → Flayer Dungeon 1-3", tips: "Brain is on level 3" },
        { text: "Gidbinn (Optional)", location: "Flayer Jungle ◆", tips: "Optional quest. +1 all skills reward from Ormus" },
        { text: "Khalim's Heart", location: "Flayer Jungle ◆ → Kurast Bazaar ◆ → Sewers 1-2", tips: "Heart is in level 2 chest" },
        { text: "Great Marsh waypoint", location: "Kurast Bazaar ◆ → Great Marsh ◆", tips: "Optional for Flail route" },
        { text: "Travincal waypoint", location: "Kurast Bazaar ◆ → Upper Kurast ◆ → Kurast Causeway → Travincal ◆", tips: "Last waypoint of Act 3" },
        { text: "Khalim's Flail", location: "Travincal ◆", tips: "Kill Council Members for flail. Use Horadric Cube to combine all parts" },
        { text: "Compelling Orb", location: "Travincal ◆ → Durance of Hate 1-3 (◆ 2)", tips: "Destroy Compelling Orb with Khalim's Will at entrance" },
        { text: "Kill Mephisto", location: "Durance of Hate 2-3 (◆ 2)", tips: "Lightning resist important. +2 all skills reward" },
        { text: "Enter portal", location: "Durance of Hate 3", tips: "Red portal to Act 4" }
      ]
    },
    4: {
      title: "Act 4: The Harrowing",
      steps: [
        { text: "Fallen Angel", location: "Pandemonium Fortress → Outer Steppes → Plains of Despair", tips: "Kill Izual for +2 skill points. Lightning and poison damage" },
        { text: "Terror's End", location: "Outer Steppes → Plains of Despair → City of the Damned ◆ → River of Flame ◆", tips: "Get both waypoints for Hellforge access" },
        { text: "Hellforge (Optional)", location: "River of Flame ◆", tips: "Socket quest. Break Mephisto's Soulstone on Hellforge. Rune + gem drops" },
        { text: "Kill Diablo", location: "River of Flame ◆ → Chaos Sanctuary", tips: "Activate all 5 seals to spawn Diablo. Lightning and fire resist. +2 all skills reward" },
        { text: "Talk to Tyrael", location: "Pandemonium Fortress", tips: "Travel to Act 5" }
      ]
    },
    5: {
      title: "Act 5: Lord of Destruction",
      steps: [
        { text: "Shenk the Overseer", location: "Harrogath ◆ → Bloody Foothills", tips: "Kill Shenk. Socket quest reward from Larzuk - choose item carefully" },
        { text: "Rescue Soldiers", location: "Bloody Foothills → Frigid Highlands ◆", tips: "Free 15 soldiers. +3 skill points reward. Get waypoint" },
        { text: "Rescue Anya", location: "Frigid Highlands ◆ → Arreat Plateau ◆ → Crystalline Passage ◆ → Frozen River", tips: "Thaw Anya with thaw potion from Malah. +10 all resists reward" },
        { text: "Complete Anya quest", location: "Harrogath ◆", tips: "Return thawed Anya. Rare class item + personalize service unlocked" },
        { text: "Kill Nihlathak (Optional)", location: "Harrogath ◆ → Halls of Vaught via portal", tips: "Red portal from town. Corpse Explosion danger - clear corpses carefully" },
        { text: "Navigate to Ancients", location: "Crystalline Passage ◆ → Glacial Trail ◆ → Frozen Tundra ◆ → The Ancients' Way ◆ → Arreat Summit", tips: "Collect all waypoints along the way" },
        { text: "Defeat the Ancients", location: "The Ancients' Way ◆ → Arreat Summit", tips: "Cannot leave or TP. Massive XP reward. +10 all stats if quest skipped in party" },
        { text: "Navigate to Throne", location: "Arreat Summit → Worldstone Keep 1-3 (◆ 2) → Throne of Destruction", tips: "Waypoint is on level 2" },
        { text: "Kill Baal", location: "Worldstone Keep 2-3 (◆ 2) → Throne of Destruction → Worldstone Chamber", tips: "Clear 5 waves then enter portal. Baal is final boss" }
      ]
    }
  },
  nightmare: {
    1: {
      title: "Act 1: The Sightless Eye",
      steps: [
        { text: "Den of Evil", location: "Blood Moor", tips: "Clear all monsters for +1 skill point" },
        { text: "Get Cold Plains waypoint", location: "Blood Moor → Cold Plains ◆", tips: "Essential waypoint" },
        { text: "Blood Raven", location: "Cold Plains ◆ → Burial Grounds", tips: "Hire Rogue mercenary after quest" },
        { text: "Countess (Optional)", location: "Cold Plains ◆ → Black Marsh ◆ → Forgotten Tower → Tower Cellar 1-5", tips: "Better rune drops in Nightmare" },
        { text: "Get Scroll of Inifuss", location: "Cold Plains ◆ → Stony Field ◆ → Underground Passage → Dark Wood", tips: "Required for Cain" },
        { text: "Rescue Deckard Cain", location: "Stony Field ◆ → Tristram via Cairn Stones", tips: "Free identify service" },
        { text: "Horadric Malus", location: "Black Marsh ◆ → Tamoe Highland → Monastery Gate → Outer Cloister ◆ → Barracks", tips: "Socket quest - save for good item" },
        { text: "Get Jail waypoint", location: "Outer Cloister ◆ → Barracks → Jail 1-3 (◆ 3)", tips: "Skip to Inner Cloister next" },
        { text: "Kill Andariel", location: "Jail 3 ◆ → Inner Cloister ◆ → Cathedral → Catacombs 1-4", tips: "High poison damage - max poison resist recommended" }
      ]
    },
    2: {
      title: "Act 2: The Secret of the Vizjerei",
      steps: [
        { text: "Radament's Lair", location: "Lut Gholein → Sewers 1-3 (◆ 2)", tips: "+1 skill point reward" },
        { text: "Horadric Staff quest", location: "Sewers 2 ◆ → Dry Hills ◆ → Halls of the Dead 1-3", tips: "Cube on level 3" },
        { text: "Staff of Kings", location: "Dry Hills ◆ → Far Oasis ◆ → Maggot Lair 1-3", tips: "Staff on level 3" },
        { text: "Amulet of the Viper", location: "Far Oasis ◆ → Lost City ◆ → Valley of Snakes → Claw Viper Temple 1-2", tips: "Amulet on altar level 2" },
        { text: "Combine Staff", location: "Horadric Cube", tips: "Staff of Kings + Amulet = Horadric Staff" },
        { text: "Palace Cellar waypoint", location: "Lut Gholein → Harem 1-2 → Palace Cellar ◆", tips: "Access to Arcane" },
        { text: "Arcane Sanctuary", location: "Palace Cellar ◆ → Arcane Sanctuary ◆", tips: "Find Summoner on one platform" },
        { text: "Kill Duriel", location: "Lost City ◆ → Canyon of the Magi ◆ → Tal Rasha's Tomb → Duriel's Chamber", tips: "Stronger Holy Freeze aura - thaw potions essential" }
      ]
    },
    3: {
      title: "Act 3: The Infernal Gate",
      steps: [
        { text: "Golden Bird quest", location: "Spider Forest ◆", tips: "+20 life permanent reward" },
        { text: "Khalim's Eye", location: "Spider Forest ◆ → Spider Cavern", tips: "Eye in cavern" },
        { text: "Khalim's Brain", location: "Spider Forest ◆ → Flayer Jungle ◆ → Flayer Dungeon 1-3", tips: "Brain on level 3" },
        { text: "Gidbinn (Optional)", location: "Flayer Jungle ◆", tips: "+1 all skills from Ormus" },
        { text: "Khalim's Heart", location: "Flayer Jungle ◆ → Kurast Bazaar ◆ → Sewers 1-2", tips: "Heart in level 2 chest" },
        { text: "Travincal waypoint", location: "Kurast Bazaar ◆ → Upper Kurast ◆ → Kurast Causeway → Travincal ◆", tips: "Council fights are dangerous" },
        { text: "Khalim's Flail", location: "Travincal ◆", tips: "Kill all Council Members. Combine parts in cube" },
        { text: "Kill Mephisto", location: "Travincal ◆ → Durance of Hate 1-3 (◆ 2)", tips: "High lightning damage - max resist. Good loot drops" }
      ]
    },
    4: {
      title: "Act 4: The Harrowing",
      steps: [
        { text: "Fallen Angel", location: "Pandemonium Fortress → Outer Steppes → Plains of Despair", tips: "+2 skill points from Izual" },
        { text: "Get waypoints", location: "Plains of Despair → City of the Damned ◆ → River of Flame ◆", tips: "Both waypoints essential" },
        { text: "Hellforge (Optional)", location: "River of Flame ◆", tips: "Better rune drops in Nightmare. Can skip" },
        { text: "Kill Diablo", location: "River of Flame ◆ → Chaos Sanctuary", tips: "Activate all seals. High damage - max resists" }
      ]
    },
    5: {
      title: "Act 5: Lord of Destruction",
      steps: [
        { text: "Shenk the Overseer", location: "Harrogath ◆ → Bloody Foothills", tips: "Socket quest from Larzuk" },
        { text: "Rescue Soldiers", location: "Bloody Foothills → Frigid Highlands ◆", tips: "+3 skill points" },
        { text: "Rescue Anya", location: "Frigid Highlands ◆ → Arreat Plateau ◆ → Crystalline Passage ◆ → Frozen River", tips: "+10 all resists reward" },
        { text: "Kill Nihlathak (Optional)", location: "Harrogath ◆ → Halls of Vaught via portal", tips: "Dangerous Corpse Explosion" },
        { text: "Navigate to Ancients", location: "Crystalline Passage ◆ → Glacial Trail ◆ → Frozen Tundra ◆ → The Ancients' Way ◆ → Arreat Summit", tips: "Get all waypoints" },
        { text: "Defeat the Ancients", location: "The Ancients' Way ◆ → Arreat Summit", tips: "Much stronger than Normal. Huge XP" },
        { text: "Navigate to Throne", location: "Arreat Summit → Worldstone Keep 1-3 (◆ 2) → Throne of Destruction", tips: "Waypoint level 2" },
        { text: "Kill Baal", location: "Worldstone Keep 2-3 (◆ 2) → Throne of Destruction → Worldstone Chamber", tips: "5 waves then portal. Final Nightmare boss" }
      ]
    }
  },
  hell: {
    1: {
      title: "Act 1: The Sightless Eye",
      steps: [
        { text: "Den of Evil", location: "Blood Moor", tips: "+1 skill point. Monsters have immunities" },
        { text: "Get Cold Plains waypoint", location: "Blood Moor → Cold Plains ◆", tips: "Essential waypoint" },
        { text: "Blood Raven", location: "Cold Plains ◆ → Burial Grounds", tips: "Very fast and dangerous" },
        { text: "Countess (Optional)", location: "Cold Plains ◆ → Black Marsh ◆ → Forgotten Tower → Tower Cellar 1-5", tips: "Best rune farming location. Up to Lo rune" },
        { text: "Get Scroll of Inifuss", location: "Cold Plains ◆ → Stony Field ◆ → Underground Passage → Dark Wood", tips: "Required for Cain" },
        { text: "Rescue Deckard Cain", location: "Stony Field ◆ → Tristram via Cairn Stones", tips: "Free identify" },
        { text: "Horadric Malus", location: "Black Marsh ◆ → Tamoe Highland → Monastery Gate → Outer Cloister ◆ → Barracks", tips: "Final socket quest - use wisely" },
        { text: "Get Jail waypoint", location: "Outer Cloister ◆ → Barracks → Jail 1-3 (◆ 3)", tips: "Direct access to Catacombs" },
        { text: "Kill Andariel", location: "Jail 3 ◆ → Inner Cloister ◆ → Cathedral → Catacombs 1-4", tips: "Max poison resist mandatory. Can drop good items" }
      ]
    },
    2: {
      title: "Act 2: The Secret of the Vizjerei",
      steps: [
        { text: "Radament's Lair", location: "Lut Gholein → Sewers 1-3 (◆ 2)", tips: "+1 skill point. Burning Dead Archers hit hard" },
        { text: "Horadric Staff quest", location: "Sewers 2 ◆ → Dry Hills ◆ → Halls of the Dead 1-3", tips: "Cube on level 3" },
        { text: "Staff of Kings", location: "Dry Hills ◆ → Far Oasis ◆ → Maggot Lair 1-3", tips: "Narrow tunnels - difficult for summoners" },
        { text: "Amulet of the Viper", location: "Far Oasis ◆ → Lost City ◆ → Valley of Snakes → Claw Viper Temple 1-2", tips: "High fire damage area" },
        { text: "Combine Staff", location: "Horadric Cube", tips: "Staff of Kings + Amulet" },
        { text: "Palace Cellar waypoint", location: "Lut Gholein → Harem 1-2 → Palace Cellar ◆", tips: "Palace guards are dangerous" },
        { text: "Arcane Sanctuary", location: "Palace Cellar ◆ → Arcane Sanctuary ◆", tips: "Ghosts are magic immune" },
        { text: "Kill Duriel", location: "Lost City ◆ → Canyon of the Magi ◆ → Tal Rasha's Tomb → Duriel's Chamber", tips: "Extreme Holy Freeze aura. Stack thaw potions. Can drop exceptional uniques" }
      ]
    },
    3: {
      title: "Act 3: The Infernal Gate",
      steps: [
        { text: "Golden Bird quest", location: "Spider Forest ◆", tips: "+20 life permanent. Kill unique monsters" },
        { text: "Khalim's Eye", location: "Spider Forest ◆ → Spider Cavern", tips: "High damage spiders" },
        { text: "Khalim's Brain", location: "Spider Forest ◆ → Flayer Jungle ◆ → Flayer Dungeon 1-3", tips: "Fetishes deal high damage" },
        { text: "Gidbinn (Optional)", location: "Flayer Jungle ◆", tips: "+1 all skills. Can skip if geared" },
        { text: "Khalim's Heart", location: "Flayer Jungle ◆ → Kurast Bazaar ◆ → Sewers 1-2", tips: "Undead Stygian Dolls explode for massive damage" },
        { text: "Travincal waypoint", location: "Kurast Bazaar ◆ → Upper Kurast ◆ → Kurast Causeway → Travincal ◆", tips: "High monster density" },
        { text: "Khalim's Flail", location: "Travincal ◆", tips: "Council Members have Conviction aura. Very dangerous. Good rune drops" },
        { text: "Kill Mephisto", location: "Travincal ◆ → Durance of Hate 1-3 (◆ 2)", tips: "Lightning resist essential. Conviction aura. Best farming boss. Can drop many uniques" }
      ]
    },
    4: {
      title: "Act 4: The Harrowing",
      steps: [
        { text: "Fallen Angel", location: "Pandemonium Fortress → Outer Steppes → Plains of Despair", tips: "+2 skill points. Izual has Frost Nova" },
        { text: "Get waypoints", location: "Plains of Despair → City of the Damned ◆ → River of Flame ◆", tips: "Venom Lords and Doom Knights are extremely dangerous" },
        { text: "Hellforge (Optional)", location: "River of Flame ◆", tips: "Can drop up to Gul rune. Optional" },
        { text: "Kill Diablo", location: "River of Flame ◆ → Chaos Sanctuary", tips: "Activate all 5 seals. Immune monsters. Lightning Inferno attack. Good item drops" }
      ]
    },
    5: {
      title: "Act 5: Lord of Destruction",
      steps: [
        { text: "Shenk the Overseer", location: "Harrogath ◆ → Bloody Foothills", tips: "Final socket quest - very valuable" },
        { text: "Rescue Soldiers", location: "Bloody Foothills → Frigid Highlands ◆", tips: "+3 skill points. Many cold immunes" },
        { text: "Rescue Anya", location: "Frigid Highlands ◆ → Arreat Plateau ◆ → Crystalline Passage ◆ → Frozen River", tips: "+10 all resists. Critical for Hell" },
        { text: "Kill Nihlathak (Optional)", location: "Harrogath ◆ → Halls of Vaught via portal", tips: "Corpse Explosion oneshots. Very dangerous. Can drop Dol-Mal runes" },
        { text: "Navigate to Ancients", location: "Crystalline Passage ◆ → Glacial Trail ◆ → Frozen Tundra ◆ → The Ancients' Way ◆ → Arreat Summit", tips: "Many dangerous monster types. Get all waypoints" },
        { text: "Defeat the Ancients", location: "The Ancients' Way ◆ → Arreat Summit", tips: "Randomly rolled mods - can be very difficult. Massive XP. Cannot skip with quest bug anymore" },
        { text: "Navigate to Throne", location: "Arreat Summit → Worldstone Keep 1-3 (◆ 2) → Throne of Destruction", tips: "Souls and Lister's pack very dangerous" },
        { text: "Kill Baal", location: "Worldstone Keep 2-3 (◆ 2) → Throne of Destruction → Worldstone Chamber", tips: "5 minion waves. Lister the Tormentor in wave 5. Baal has Mana Rift and high damage. Final boss. Can drop best items" }
      ]
    }
  }
};
