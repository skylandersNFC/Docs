### Changes compared to **[solosky/pixl.js](https://github.com/solosky/pixl.js)**
 - Increased slots limit to 99.
 - Enabled custom mode for card emulation, utilizing the UID and ATQA from the card dump and setting SAK to 0x08.
   - _This is necessary for the Nintendo Switch to recognize the emulated card._
 - Updated the card emulator logo.
 - Replaced the logo in the top-left corner.
 - Modified the repository path in the "About Device" page.
 - Automatically refreshes the UID when a new dump is loaded into a slot that already contains an existing dump.
