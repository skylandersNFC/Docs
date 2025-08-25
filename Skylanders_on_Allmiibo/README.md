# Skylanders on Allmiibo (Unofficial Support)

## Overview 

**Allmiibo** is an NFC emulation device originally designed for emulating Amiibo figures. Support for **Skylanders** was later introduced, enabling users to simulate Skylanders figures by uploading NFC dumps to the Allmiibo device and having it emulate them.

If you dont have it, check : **[Where to Buy Allmiibo](https://skylandersnfc.github.io/Docs/Skylanders_on_Allmiibo/#where-to-buy-allmiibo-)**

## Showcase

**[Skylanders on Allmibo with Portal of Power](https://github.com/skylandersNFC/Docs/blob/main/Skylanders_on_Allmiibo/videos/skylanders_on_allmiibo_pop.gif)**

**[Skylanders on Allmibo with Nintendo Switch](https://github.com/skylandersNFC/Docs/blob/main/Skylanders_on_Allmiibo/videos/skylanders_on_allmiibo_switch.gif)**

## How to Determine Your Model (LCD or OLED) :

If you're trying to figure out whether your device has an LCD or OLED screen, here's a quick way to tell:

**LCD** screens have a **whitish** background.

![LCD](https://raw.githubusercontent.com/skylandersNFC/Docs/main/Skylanders_on_Allmiibo/images/LCD/Pixl-with-LCD-1.jpg)
![LCD](https://raw.githubusercontent.com/skylandersNFC/Docs/main/Skylanders_on_Allmiibo/images/LCD/Pixl-with-LCD-2.jpg)

**OLED** screens have a **black** background.

![OLED](https://raw.githubusercontent.com/skylandersNFC/Docs/main/Skylanders_on_Allmiibo/images/OLED/Pixl-with-OLED-1.jpg)
![OLED](https://raw.githubusercontent.com/skylandersNFC/Docs/main/Skylanders_on_Allmiibo/images/OLED/Pixl-with-OLED-2.jpg)


## How to Flash the New Custom Firmware :

There are **two simple ways** to update the firmware on your **Allmiibo** device:

- **Using a Computer:** Connect to the Allmiibo device via Bluetooth using a computer equipped with a Bluetooth adapter.
- **Using an Android Phone:** Use the "**[MTools BLE - BLE RFID Reader](https://play.google.com/store/apps/details?id=com.mtoolstec.mtoolsLite)**" app to connect to Allmiibo.

### Using a Computer :

1. For Skylanders, to make them compatible with **Nintendo Switch** and have the **99 slots Card Emulation** feature, we use a **slightly modified firmware**.
- You can get the latest custom version here: **[Allmiibo Skylanders Firmware](https://github.com/skylandersNFC/Docs/tree/main/Skylanders_on_Allmiibo/firmware)**.
   - This custom version of the firmware was provided by anonymous user. Thank you kindly for your work.
2. Download the **appropriate** firmware (**LCD** or **OLED**) based on your device.
- If you're unsure which version you have, refer to "**[How to Determine Your Model (LCD or OLED)](https://skylandersnfc.github.io/Docs/Skylanders_on_Allmiibo/#how-to-determine-your-model-lcd-or-oled-)**".
3. **Extract** the downloaded ZIP file, and inside **you’ll find another archive** named "**pixjs_ota_vX.zip**". This is the file you'll need.
4. Ensure that **Bluetooth** is **enabled** on your computer/laptop.
5. Open **Google Chrome** and navigate to **[https://pixl.amiibo.xyz/](https://pixl.amiibo.xyz/)**.
- Other browsers may **not** support **[Bluetooth](https://caniuse.com/web-bluetooth)** connections for this process.
- Also if the above link doesn’t work, use this backup link: **[Backup pixl.amiibo.xyz](https://skylandersnfc.github.io/Docs/Skylanders_on_Allmiibo/pixl.amiibo.xyz/)**
6. Press the **upper button** on your **Allmiibo** device to navigate to the "**BLE File Transfer**" menu.
- You should see a MAC address and the website address: **[https://pixl.amiibo.xyz/](https://pixl.amiibo.xyz/)**.
7. Click on the **[Connect]** button and **pair** your **Allmiibo** device.
8. Once connected, a **green** bubble will appear on the right, showing your **current firmware version**.
9. Click the **[Refresh]** button and open your "**E:/ [External Flash]**" storage. This **confirms** that you are **connected**.
  - If you see a "**chameleon**" folder - **DELETE IT**. It will be recreated by the new custom firmware.
10. Click the gray **[DFU]** button. It will prompt you to enter DFU mode.
- Click **Yes** to proceed and let it open the **DFU** upgrade page **[Web Bluetooth Secure DFU](https://thegecko.github.io/web-bluetooth-dfu/examples/web.html)**.
- If this page is not working, we also have a backup of it: **[Backup Web Bluetooth Secure DFU](https://skylandersnfc.github.io/Docs/Skylanders_on_Allmiibo/web-bluetooth-dfu/examples/web.html)**
11. The new page will ask you to select the firmware package.
- Select the **pixjs_ota_vXXX.zip** file you prepared earlier.
- Be mindful of time, as the Allmiibo device may turn off if you take too long, requiring you to repeat steps 5-9.
12. Wait for the process to **complete** and **don't do anything stupid**.
13. **That's it!** Your **firmware** is now **updated**.

### Using an Android Phone :

1. Download the "**[MTools BLE - BLE RFID Reader](https://play.google.com/store/apps/details?id=com.mtoolstec.mtoolsLite)**" app.
2. Go to the "**Pixl.js Amiibo**" menu and click on "**Pixl.js (Click to connect)**" at the top.
3. Press the **upper button** on your **Allmiibo** device to navigate to the "**BLE File Transfer**" menu.
- You should see a MAC address and the website address: **[https://pixl.amiibo.xyz/](https://pixl.amiibo.xyz/)**.
4. **Pair** the **Allmiibo** device with your **phone**.
5. Check the "**File**" menu on the bottom left.
- If you see a "**chameleon**" folder - **DELETE IT**. It will be recreated by the new custom firmware.
6. Go to "**Firmware**" menu on the bottom right.
7. You can get the latest custom firmware from here: **[Allmiibo Skylanders Firmware](https://github.com/skylandersNFC/Docs/tree/main/Skylanders_on_Allmiibo/firmware)**.
- Download the **appropriate** firmware (**LCD** or **OLED**) based on your device.
- If you're unsure which version you have, refer to "**[How to Determine Your Model (LCD or OLED)](https://skylandersnfc.github.io/Docs/Skylanders_on_Allmiibo/#how-to-determine-your-model-lcd-or-oled-)**".
8. On "**(1) File**" select the correct firmware file which you have just downloaded.
9. On "**(2) Device**" make sure your device is **connected** and **selected**.
10. On "**(3) Progress**" click "**Start**" to flash the new firmware and **don't do anything stupid**.
11. **That's it!** Your **firmware** is now **updated**.

## How to Upload Skylanders NFC Dumps :

You can do this via the **[https://pixl.amiibo.xyz/](https://pixl.amiibo.xyz/)** website using a computer or laptop with Bluetooth, or by using the **[MTools BLE - BLE RFID Reader](https://play.google.com/store/apps/details?id=com.mtoolstec.mtoolsLite)** app.
I’ll focus on the website method, as the app is relatively straightforward.

1. On your Allmiibo device, navigate to the "**Card Emulation**" menu.
- If it's your first time accessing this menu, it may take a while to initialize.
- The device will also create a "chameleon" folder with two subfolders: "dumps" and "slots".
2. Return to the main menu and select the "**BLE File Transfer**" option.
3. Open **[https://pixl.amiibo.xyz/](https://pixl.amiibo.xyz/)** and connect it to your **Allmiibo** device.
4. Click the "**Refresh**" button, and you should see "**E:/ [External Flash]**" storage appear.
5. Inside this storage, locate the "**chameleon**" folder and its "**dumps**" subfolder.
- These were automatically created in Step 1 when the "**Card Emulatio**" menu was initialized.
- If you skipped Step 1, you can manually create these folders.
6. In the "**chameleon/dumps**" folder, click the blue "**Upload**" button.
7. Select the **desired dumps** from the **[Skylanders Ultimate NFC Pack](https://skylandersnfc.github.io/Skylanders-Ultimate-NFC-Pack/)**.
- You can upload multiple dumps, but avoid uploading more than 20 at once or having too many dumps in this directory.
8. The upload popup window can be a bit tricky.
- Wait for all the dumps to upload, indicated by a green check mark on the right.
9. Once complete, close the window.
- You’ll get a **warning** message, simply confirm by clicking **OK**.
10. All your uploaded dumps should now appear in the "**chameleon/dumps**" folder.


## How to Emulate Skylanders NFC Dumps :

1. On your **Allmiibo** device, go to the "**Card Emulator**" menu.
2. Select "**Slot 01**", then go to "**Type**" and make sure "**Mifare 1k**" is the type of this slot.
3. Navigate to "**Data...**", then "**Load...**".
4. Select a Skylander dump from the "**chameleon/dumps**" folder and you should see "**Load File Success**".
- If you want to play on **Nintendo Switch**, go down to "**Advanced...**" and set "**Custom Mode**" to "**[ON]**"
- This will change the **SAK** from `81` to `08` which is important for Nintendo Switch to recognize the skylander.
5. That's it! You don’t need to adjust anything else. Simply return to "**[Tag Details]**" menu.
6. You should now see your Skylander's name followed by "**.dump**".
- This is the emulation screen, and your Allmiibo device will now emulate the selected Skylander.
- To use a different Skylander, select a different slot and repeat the steps.
- The current card emulation limit is 99 slots, but for more than 30 slots you have to enable them manually via the menu.
7. Place your **Allmiibo** device on the **Portal of Power** to bring the selected Skylander into the game.
- The device will also automatically save character progress, gold, and so on.
- Keep in mind, however, that the game doesn't save data instantly.
- Here’s a list of when data is written to the tag:

> 30 seconds have passed since the last write
 
> A Skylander gains a level
 
> 100 gold pieces have been collected by a Skylander
 
> A Skylander gets a skill upgrade
 
> The currently equipped Hat or Trinket equipped by a Skylander is changed
 
> The owner of a Skylander is changed
 
> The nickname of a Skylander is changed
 
> A Skylander is reset
 
> A Skylander is placed on a portal for the first time
 
> A Skylander gets a stat boost after completing a challenge

## Where To Buy Allmiibo :

Here are some **Allmiibo** links from **AliExpress** :

[https://www.aliexpress.com/item/1005006214951877.html](https://www.aliexpress.com/item/1005006214951877.html)

[https://www.aliexpress.com/item/1005006732518163.html](https://www.aliexpress.com/item/1005006732518163.html)

[https://www.aliexpress.com/item/1005006260883608.html](https://www.aliexpress.com/item/1005006260883608.html)


Also check : **[Pixl.js buyer guide](https://github.com/solosky/pixl.js/issues/213)**

## Notes :

Do **not** use more than **1.5 MB** of the device’s total 1.83 MB capacity.
Exceeding this limit may lead to hard bricking of the microcontroller, causing constant freezing on startup, among other issues.
Additionally, the device may slow down if you store too many small files.

Guidelines:

- Avoid placing **too many files** in the same directory.
- Use **short file and directory names** to ensure the full file path does not exceed 64 characters.
