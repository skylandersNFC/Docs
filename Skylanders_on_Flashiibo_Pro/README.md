#  Skylanders on Flashiibo Pro (Unofficial Support)

![Flashiibo Pro](images/Flashiibo_Pro.jpg)

## What is Flashiibo Pro

[https://www.flashiibo.com](https://www.flashiibo.com)

## Where to get Flashiibo Pro

[https://www.amazon.com/dp/B0CQWRPJL2](https://www.amazon.com/dp/B0CQWRPJL2)

## Introduction

Flashiibo Pro’s main purpose is to emulate NTAG215 which is the NFC technology amiibo figures use. However, it’s capable of emulating other NFC/RFID technologies.

For example, it’s also capable of emulating MiFare Classic 1K, the NFC/RFID technology Skylanders use. Unfortunately, the Skylanders use a slight variation of the technology that the official Flashiibo Pro firmware doesn't yet support. So a special third-party firmware has to be used, see section below.

In the future official Flashiibo firmware may support Skylanders out of the box, but for now this hacky solution is the only way.

## Install the Unofficial Firmware

### Using Android / iPhone

1. Download the firmware here: [Unofficial Skylanders Firmware](https://downloads.flashiibo.com/Unofficial_Skylander_Firmware_OTA_2.11.2.zip)
2. Download nRF Device Firmware Update app for [Android](https://play.google.com/store/apps/details?id=no.nordicsemi.android.dfu&hl=en_US&gl=US) or [iPhone](https://apps.apple.com/us/app/nrf-device-firmware-update/id1624454660)
3. Open the downloaded app (named DFU), and select the downloaded firmware.
4. Keep Flashiibo Pro's charging cable plugged in, then select "Firmware Update" in Settings.
5. Make sure the Phone you use to perform the update is close to Flashiibo Pro being updated, within a foot to ensure a stable connection.
6. On your Android or iPhone, choose device "Flashiibo DFU" or "pixl dfu", and then tap Upload.
7. Wait for the upload to finish. Do NOT turn off your phone or Flashiibo Pro or interrupt the process.
8. Now your device is likely in a different language (Germany if you had English before). You can perform a settings reset to restore the language to English. The following button sequence can be used to reset the settings.
   
   - 2nd Gen Pro with Buttons: Up, Middle, Up, Up, Up, Middle, Down, Middle
   - 1st Gen Pro with a Stick: Left, Middle, Left, Left, Left, Middle, Right, Middle

### Using PC / Mac

Firmware update on PC / Mac is not supported yet.

### Restoring the Official Firmware

If you wish to forego skylander support and restore the official firmware, follow the [instructions here](https://www.flashiibo.com/manual/pro#h.8xhnoivovyc).

## Upload Skylander Dumps

You can do this via the [https://protools.flashiibo.com](https://protools.flashiibo.com) website using a computer or laptop with Bluetooth.

01. On your Flashiibo Pro device with the unofficial firmware installed, navigate to the “Card Emulation” menu.
    
    - If it’s your first time accessing this menu, it may take a while to initialize.
    - The device will also create a “chameleon” folder with two subfolders: “dumps” and “slots”.
02. Return to the main menu and select the “BLE File Transfer” option.
03. Open [https://protools.flashiibo.com](https://protools.flashiibo.com) and connect it to your Flashiibo Pro device.
04. Click the “Refresh” button, and you should see “E:/ \[External Flash]” storage appears.
05. Inside this storage, locate the “chameleon” folder and its “dumps” subfolder.
    
    - These were automatically created in Step 1 when the “Card Emulation” menu was initialized.
    - If you skipped Step 1, you can manually create these folders.
06. In the “chameleon/dumps” folder, click the blue “Upload” button.
07. Select the desired dumps from the [Skylanders Ultimate NFC Pack](https://skylandersnfc.github.io/Skylanders-Ultimate-NFC-Pack/).
    
    - You can upload multiple dumps, but avoid uploading more than 20 at once or having too many dumps in this directory.
08. The upload popup window can be a bit tricky.
    
    - Wait for all the dumps to upload, indicated by a green check mark on the right.
09. Once complete, close the window.
    
    - You’ll get a warning message, simply confirm by clicking OK.
10. All your uploaded dumps should now appear in the “chameleon/dumps” folder.

## Emulate Skylander Dumps

1. On your Flashiibo Pro device, go to the “Card Emulator” menu.
2. You can use any slot you like, but for the sake of this Tutorial, slot 1 is used as an example.
3. Select “Slot 01”, then go to “Type” and make sure “Mifare 1k” is the type of this slot.
4. Navigate to “Data…”, then “Load…”.
5. Select a Skylander dump from the “chameleon/dumps” folder and you should see “Load File Success”.
   
   - If you want to play on Nintendo Switch, go down to “Advanced…” and set “Custom Mode” to “\[ON]”
   - This will change the SAK from 81 to 08 which is important for Nintendo Switch to recognize the skylander.
6. That’s it! You don’t need to adjust anything else. Simply return to “\[Tag Details]” menu.
7. You should now see your Skylander’s name followed by “.dump”.
   
   - This is the emulation screen, and your Flashiibo Pro device will now emulate the selected Skylander.
   - To use a different Skylander, select a different slot and repeat the steps.
   - The current card emulation limit is 8 slots, but this may be expanded in the future.
8. Place your Flashiibo Pro device on the Portal of Power to bring the selected Skylander into the game.
   
    - The device will also automatically save character progress, gold, and so on.
    - Keep in mind, however, that the game doesn’t save data instantly.
    - Here’s a list of when data is written to the tag:
    - 30 seconds have passed since the last write
    - A Skylander gains a level
    - 100 gold pieces have been collected by a Skylander
    - A Skylander gets a skill upgrade
    - The currently equipped Hat or Trinket equipped by a Skylander is changed
    - The owner of a Skylander is changed
    - The nickname of a Skylander is changed
    - A Skylander is reset
    - A Skylander is placed on a portal for the first time
    - A Skylander gets a stat boost after completing a challenge
