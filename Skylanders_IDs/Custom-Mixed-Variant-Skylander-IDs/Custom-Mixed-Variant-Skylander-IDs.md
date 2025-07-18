# Custom Mixed Variant Skylander IDs
Character IDs and Variant IDs for unintended Skylanders that can still be played (in at least one title in some "correct" manner) in unmodified games. A comprehensive list of IDs for regular, developer, and unreleased Skylanders can be found [here](https://github.com/Texthead1/Skylander-IDs).

Each Variant ID is a 16-bit unsigned short, representing a bitfield of 6 different flags used to determine the figure in-game. More information in regard to how a Variant ID is composed can be found [here](https://github.com/NefariousTechSupport/Runes/blob/master/Docs/SkylanderFormat.md#sub-type). For simplicity's sake, both IDs are shown as denary (base-10) integers.

This list does not include "theoretical" custom mixed variant Skylanders that don't show up as you'd expect in any mainline game (e.g. LightCore Jolly Bumble Blast), or any truncated reposes for Skylanders Giants figures (such as a 2013 repose alt deco Hot Dog showing up as a Molten Hot Dog in Giants and a Special Fire Bone Hot Dog in future games), but does contain mixed variants that include unreleased variants (such as Series 2 LightCore Flashwing).

All of these Skylanders have been founded and created by Texthead - who happens to be me ;)

These dumps are mostly intended to be used in either Skylanders Giants or Skylanders Trap Team (due to their less strict variant look up algorithm), an indicator will be present for each to signify this; most dumps are unlikely to function at all in the Alchemy toolset games, showing up as a Special variant instead, however reposed SSA variants are an exception, but will crash Skylanders Imaginators when the Magic Moment finishes (which can be mitigated through the Racing mode on non-Nintendo Switch versions).

Dumps for these Skylanders are not available in this repository, but you can easily create them with a figure generator present in software such as CEMU or the Dolphin Emulator. Sellers are not permitted to sell dumps created from the information presented here at inflated prices for their own selfish monetary gain. Any listings that I happen to come across will be reported, which I hope is understood.

Skylanders, Spyro, Activision, and other intellectual properties are owned by Activision Publishing Inc. or their respective owner(s); the information present here does not exist for any malicious intentions.

## Info
### Giants Only
Variant Skylander              | CharacterID | VariantID
-------------------------------|-------------|----------
Legendary Jet-Vac (LightCore)° | 100         | 5635
Punch Pop Fizz (LightCore)     | 108         | 5634

° Although LightCore Legendary Jet-Vac is correctly named in the Giants Magic Moment (which doesn't happen with invalid alt deco mixed variants), he lacks his LightCore effect much like how all LightCore alt decos appear in Trap Team.
### Trap Team Only
Variant Skylander                      | CharacterID | VariantID
---------------------------------------|-------------|----------
Hyper Beam Prism Break (LightCore)     | 7           | 10757
Volcanic Eruptor (Series 1)            | 9           | 9218
Lava Barf Eruptor (LightCore)          | 9           | 10757
Eruptor (LightCore Eon's Elite)        | 9           | 14864
Dark (Mega Ram) Spyro (Series 1)°      | 16          | 9218
Springtime Trigger Happy (Series 1)    | 19          | 9218
Dark Stealth Elf (Series 1)            | 26          | 9218
Dark Spyro (Series 3 unique charID)°°  | 28          | 10245
Dark Spyro (Eon's Elite)               | 28          | 14352
Turbo Jet-Vac (LightCore)              | 100         | 10757
Flashwing (LightCore Series 2)         | 103         | 14849
Super Gulp Pop Fizz (LightCore)        | 108         | 10757
Series 1 Love Potion Pop Fizz          | 108         | 13314
Fizzy Frenzy Pop Fizz (LightCore)      | 108         | 14853
Sure Shot Shroomboom (LightCore)       | 113         | 14849
Legendary Bash (Series 2)              | 404         | 6145
Legendary Spyro (Series 2)             | 416         | 6145
Legendary Spyro (Series 3)             | 416         | 10245
Legendary Spyro (Eon's Elite)          | 416         | 14352
Legendary Trigger Happy (Series 2)     | 419         | 6145
Legendary Trigger Happy (Series 3)     | 419         | 10245
Legendary Trigger Happy (Eon's Elite)  | 419         | 14352
Legendary Chop Chop (Series 2)         | 430         | 6145
Legendary Chop Chop (Series 3)         | 430         | 10245
Legendary Chop Chop (Eon's Elite)      | 430         | 14352
Enchanted Star Strike (non-LightCore)  | 3009        | 9218
Legendary Grim Creeper (non-LightCore) | 3013        | 9219

° This Spyro appears like regular Dark Spyro in-game, but has the Spyro Character ID. This means that he will appear as Special Spyro in the previous games and the 3DS titles, much like Dark Mega Ram Spyro.

°° This Spyro appears like regular Dark Mega Ram Spyro in-game, but has the Dark Spyro Character ID. This means that he will appear as Dark Spyro in the previous games and the 3DS titles, much like regular Dark Spyro.
### Both Games
Variant Skylander                | CharacterID | VariantID
---------------------------------|-------------|----------
Polar Whirlwind (Series 1)       | 0           | 5122
Prism Break (LightCore Series 2) | 7           | 6657
Eruptor (LightCore Series 2)     | 9           | 6657
Legendary Ignitor (Series 1)     | 10          | 5123
Legendary Slam Bam (Series 1)    | 15          | 5123
Royal Double Trouble (Series 1)  | 18          | 5122
Drobot (LightCore Series 2)      | 20          | 6657
Legendary Stealth Elf (Series 1) | 26          | 5123
Dark Spyro (Series 2)            | 28          | 6145
Hex (LightCore Series 2)         | 29          | 6657
Legendary Chill (non-LightCore)  | 106         | 5123

## Additional Notes
Custom mixed variant Skylanders are created by abusing how the different games treat the Variant ID, which is moreso a set of flags that govern different aspects on how to differentiate a Skylander from normal. These flags can be set in certain ways to have specific Skylanders games to load up variant Skylanders that were never intended for release. However, due to this unintended behaviour, different custom mixed variant dumps have odd behaviours:
* Reposed SSA Variants (and other niche variants) are not named correctly in the Magic Moment
* Eon's Elites of SSA Variants do not have a health bonus or the additional effects, but do retain the damage bonus
* LightCore Eon's Elite Eruptor does not have the LightCore Blast
* Series 1 Love Potion Pop Fizz can still summon in as the Mega Beast despite never being able to purchase the upgrade