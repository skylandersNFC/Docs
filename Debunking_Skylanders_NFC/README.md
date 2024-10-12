# Debunking Skylanders NFC
Greetings,

So, there is still quite a lot of drama around those NFC cards and how to write on them. Here, I will try to debunk some of the things I've found. 

First, look for these parameters in the listing of the cards: 

 ![Alt Tag](https://i.ibb.co/nB9p8p9/image.png)

The first column is required, the second column is good to have (but not necessary), and the third column should be avoided like the plague. 

---

However, there are mainly two types of cards people are getting:

**UID Re-Writable Cards**

**UID Locked Cards**
 
Now, both types of cards work for "normal" Skylanders (I call "normal" everything but Senseis from Imaginators) 

The **UID Re-Writable Cards** are the ones you want, as they are easier to use, can be formatted, and will never be rendered unusable by a wrong data flash.

The **UID Locked Cards** will also work, but for these, you need to prepare your NFC dumps before flashing them. This is because the dumps need to be adjusted for the card's UID, which will always remain the factory UID. This NFC dump preparation is done using a software called "TheSkyLib", "SkyUID-Generator" or "SkyDumps Generator", which we will discuss later. 

**<< NEW >>** **[Yet Another Mifare Tool (YAMT)](https://github.com/skylandersNFC/Yet-Another-Mifare-Tool/)** is a new software that automates the entire preparation process for Mifare cards. It works seamlessly with any type of card, eliminating the need for any manual setup.

---

Now, you also have several ways of physically writing to those tags

**[ACR122U](https://skylandersnfc.github.io/Docs/Skylanders_Buying_List/Skylanders_NFC_Devices/ACR122U/)**

**[NS106](https://skylandersnfc.github.io/Docs/Skylanders_Buying_List/Skylanders_NFC_Devices/NS106/)**

**[PN532 2.0](https://skylandersnfc.github.io/Docs/Skylanders_Buying_List/Skylanders_NFC_Devices/PN532/)**

**[Android Native NFC](https://skylandersnfc.github.io/Docs/Skylanders_Buying_List/Skylanders_NFC_Devices/AndroidPhone/)**

---

The **External NFC Writer (ACR122U)** is mainly what you need because with such a writer and UID unlocked cards, you can easily flash all kinds of Skylanders, including Senseis from Imaginators.

Yes, I repeat, with ACR122U NFC Writer and UID Re-Writable cards, you can flash Imaginators as well as any other Skylanders. 
This is possible because the Windows implementation on "Mifare Windows Tool" (the software we use for flashing) can actually change and reset UIDs on the tags, but only if you have a UID re-writable tag, of course. 

However, we have a new software called **[Yet Another Mifare Tool (YAMT)](https://github.com/skylandersNFC/Yet-Another-Mifare-Tool/)** and it's way better, so use it instead.

---

For **NS106** there is a tutorial here : **[NS106 - Write Skylanders on UID Re-Writable and UID Locked Cards](https://skylandersnfc.github.io/Docs/NS106_UID_ReWritable_and_Locked_Cards/)**

---

For **PN532 2.0** you can use **[Yet Another Mifare Tool (YAMT)](https://github.com/skylandersNFC/Yet-Another-Mifare-Tool/)** to write all the Skylanders you want.

---

On **Android Native NFC**, things are a bit more involved.

First, you need to check if your phone's NFC is compatible with the MIFARE Classic Tool (MCT) app.

**[Compatible Devices](https://github.com/ikarus23/MifareClassicTool/blob/master/COMPATIBLE_DEVICES.md)**

**[Incompatible Devices](https://github.com/ikarus23/MifareClassicTool/blob/master/INCOMPATIBLE_DEVICES.md)**

However, there is no support for UID change on Android with the cards we've mentioned so far. Therefore, any type of card here will be considered UID locked since the phone won't be able to modify their UIDs.

To solve this, you need to prepare each dump and adjust it to match the card's factory UID before flashing it. This process is done using a software called **[SkyUID Generator](https://github.com/skylandersNFC/SkyUID-Generator)** or **[TheSkyLib](https://github.com/skylandersNFC/TheSkyLib)**. You can also use **[SkyDumps Generator](https://skylandersnfc.github.io/SkyDumps-Generator/)**

However, with Android phones even after using the SkyUID software, you won't be able to get Senseis working. There is a detailed explanation in the documentation for SkyUID.

All cards we've mentioned so far (UID Re-Writable and UID Locked) are considered Gen 1. In order to flash Senseis with Android phone, you need specific cards called Gen 2. 

Gen 2 cards will work for Imaginators as well on Android, but the flashing process is a bit more involved.

There is a tutorial here: **[Write Imaginators on Android Phones with Gen2 Tags](https://skylandersnfc.github.io/Docs/Android_Imaginators_Gen2/)**


## TL;DR ACR122U ##


Get **UID Re-Writable** cards and an **ACR122U** NFC Writer on Windows, and you can flash **all kinds of Skylanders, including Imaginators**. 


## TL;DR NS106 ##


Watch this: **[NS106 - Write Skylanders on UID Re-Writable and UID Locked Cards](https://skylandersnfc.github.io/NFC-Copy/)**


## TL;DR PN532 2.0 ##

Just use **[Yet Another Mifare Tool (YAMT)](https://github.com/skylandersNFC/Yet-Another-Mifare-Tool/)**.

With **UID Re-Writable** cards you can get all the Skylanders you want (including **Imaginators**) and you can **re-write** them all you want.

With **UID locked** cards you can get **only older** Skylanders (**without** Imaginators) and you can **re-write** them with **only older** Skylanders.

With **Gen2** cards you can get **older Skylanders** and **Imaginators**, but you can **re-write** them with **only older** Skylanders.


## TL;DR Android ##


You can use Android Native NFC with UID Locked cards (all cards will be considered UID locked here). This method allows you to flash **older Skylanders (not Imaginators)** on Gen1 cards if you prepare the dumps with **[SkyUID](https://github.com/skylandersNFC/SkyUID-Generator)**, **[TheSkyLib](https://github.com/skylandersNFC/TheSkyLib)** or **[SkyDumps Generator](https://skylandersnfc.github.io/SkyDumps-Generator/)**.

On **Android**, you can flash Imaginators on Gen2 cards by watching this tutorial: **[Write Imaginators on Android Phones with Gen2 Tags](https://skylandersnfc.github.io/Docs/Android_Imaginators_Gen2/)**
