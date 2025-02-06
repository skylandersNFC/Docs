# Heartbreaker Buckshot (RAM Exploit)
This is an exploit which bypasses the mandatory security check present in Skylanders Imaginators via the loaded RAM of the console and the "RAM" of the Portal of Power too. This is performed with 2 separate NFC tag dumps which can be written to two individual cards, and can be performed on unmodified consoles. A mirror to these files (which also includes some other files and is hosted by BoomBringer) can be found [here](https://drive.google.com/file/d/1Py3QECJLKYehkDua5XE6rcs8hwfUGjCB/view).

This method is unlikely to work on the Nintendo Switch version of Skylanders Imaginators.

The exploit was discovered by Texthead - who just so happens to be me ;)

These two dumps were created exclusively for this exploit using a custom figure generator. The first dump is a broken Heartbreaker Buckshot dump, and the second dump is the "Error Bypass" dump. These dumps have also been shared elsewhere and are present in the Ultimate Skylanders NFC Pack on the Internet Archive. Both dumps contain the Heartbreaker Buckshot character ID and variant ID (which is mostly irrelevant for the second dump as it isn't read and instead is used to load up any previous character). The IDs can be found [here](https://github.com/Texthead1/Skylander-IDs?tab=readme-ov-file#imaginators-1).

## Notes
A mandatory security check was employed into Imaginators as a means to prevent generated dumps almost all of the 2016 characters. This check reads digital signatures within the Skylander and validates if it's correct. Due to the asymetric cryptography applied, I am led to believe it is impossible to generate custom Heartbreaker Buskshot dumps (or any Sensei for that matter) without a security leak, or just an official dump from an actual figure.

Both of the dumps present here contain no signatures. The second dump takes advantage of a odd oversight in the Alchemy toolset Skylanders games when it comes to the Skylander loading routine. If a certain byte in the tag header is non-0, it is possible to load a Skylander previously stored in RAM, but only if that previous Skylander occupied the same figure index on the Portal of Power.

More information in regards to this specific byte can be found [here](https://github.com/Texthead1/Runes/blob/master/Docs/SkylanderFormat.md#error-byte).

## Usage
### Actual Hardware
#### Step 1
I first suggest unplugging your Portal of Power from the console. Leave it for at least 2 seconds to ensure the internal components have fully reset before plugging it back in. The Portal of Power contains 16 "slots" that a figure can "exist" on (which are the same 16 slots you see when loading up digital Skylanders on an emulated Portal), and when the hardware is reset, the first figure will always occupy the first "slot".
#### Step 2
Place the Heartbreaker Buckshot dump on the Portal of Power. The game should show the Magic element symbol in the game, and soon afterwards display the corrupted Skylander dialog box. You can unplug the Portal of Power and take off the dump.
#### Step 3
Plug back in the Portal of Power after a while and place down the "Error Bypass" dump on top of it. After a while of showing the Magic element in-game, Heartbreaker Buckshot should (after quite a bit of time), successfully load in. Note that no data is actually pulled from or saved to the Error Bypass dump; Heartbreaker's data is all loaded directly from RAM. There are some known issues with his upgrades, Sky-Chi, and other aspects, acting odd or outright dissapearing between levels.

It is not too strict on when you remove or place down the dumps. You can swap them out while the Portal of Power is plugged in or unplugged if you please.
### Emulated Portal
#### Step 1
Load up the Heartbreaker Buckshot dump into the game. This will, much like the actual hardware, show the Magic element for a while before showing the corrupted Skylander dialog box again.
#### Step 2
Take off the Heartbreaker Buckshot dump from the Portal and load up the "Error Bypass" dump on the exact same figure slot. If done correctly and after waiting for a while, he should load up as expected.

## Disclaimer (for sellers)
These dumps were created for the goodwill and use for the Skylanders community, free to download by anyone. It is my request that you do not sell my dumps for your own selfish monetary gain, especially if you artificially inflate the price of a single tag far beyond what it would cost if it was not pre-programmed. Any listings that I happen to come across will be reported, which I hope is understood.
