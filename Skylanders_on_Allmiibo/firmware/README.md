### Changes compared to **[solosky/pixl.js](https://github.com/solosky/pixl.js)**
 - Increased slots limit to 99.
 - Enabled custom mode for card emulation, utilizing the UID and ATQA from the card dump and setting SAK to 0x08.
   - _This is necessary for the Nintendo Switch to recognize the emulated card._
 - Updated the card emulator logo.
 - Replaced the logo in the top-left corner.
 - Modified the repository path in the "About Device" page.
 - Automatically refreshes the UID when a new dump is loaded into a slot that already contains an existing dump.

### * Discplaimer 

This custom firmware was originally developed by an individual who later chose to remain anonymous and discontinued all work on Skylanders NFC projects.
As a result, the firmware is no longer being updated or supported.

If you're specifically looking for features like the 99-slot modification or Nintendo Switch compatibility for Skylanders,
I recommend using this modified version - it should meet those needs effectively.

However, if you're interested in the latest features from Solosky (such as support for Disney Infinity), you should use his most recent official firmware instead.
It also supports Skylanders, though it offers fewer slots, and for Nintendo Switch functionality, you may need to manually set the SAK value.
