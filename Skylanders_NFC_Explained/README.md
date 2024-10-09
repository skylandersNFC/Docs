# Skylanders NFC Explained

## **What cards do I need?**

Look for those parameters:

**Mifare S50 Compatible**

> Explained: Mifare S50 is a type of contactless NFC card developed by NXP. Official name is "Mifare MF1 IC S50"

**13.56Mhz**

> Explained: This is the NFC frequency. If you see 125 kHz, that's lower RFID frequency that won't work.
	
**1k**

> Explained: That's the amount of memory on the card.

**Re-Writable UID [Sector 0, Block 0 Writable]**

> Explained: Official MIFARE S50 1k Classic NFC tags won't allow change of UID (which is stored inside Sector0, Block 0).

However, the NFC cards we are getting from Amazon or AliExpress are MIFARE compatible, meaning they use clone chips, that are actually better. The extra flavor comes from the ability of those chips to change UID (rewrite Sector 0, Block 0), hence you can actually write a whole Skylander NFC dump on them. Those chips are also called "Chinese Magic Cards" and you might also see things like "S50" and "MF1" on them, that comes from the MIFARE NFC standard, pointing out they are compatible.

Also STAY AWAY from any NTAG cards (usually NTAG215 or 213). Those are for Amiibo/Disney Infinity or Lego Dimensions, NOT Skylanders. More info here [Know Your Game Tags](https://skylandersnfc.github.io/Docs/Know_Your_Game_Tags/)

## **What NFC Reader/Writer do I need?**

Check about the different types here : [Debunking Skylanders NFC](https://skylandersnfc.github.io/Docs/Debunking_Skylanders_NFC/)

## **How does the NFC card creation process work?**

You will find plenty of Skylanders NFC tutorials and none of them explains the actual process. No idea what's up with that. So here is how it actually works:

Each NFC cards have 16 sectors (from 0 to 15). Inside each sector, there are 4 blocks. Inside those blocks is where your Skylanders data goes, as each sector contains keys and the data itself (simplified explanation).

As i said above, with the MIFARE compatible cards (Chinese Magic Card), you can also write data to Block 0 (inside Sector 0), which contains the serial number (UID).

Empty NFC cards will have no data on them and an empty key (A) for each block "FFFFFFFFFFFF".
	
In order to read (recognize) an NFC card with your reader, you need to have a collection of each key the card is using for each block. Since the keys for an empty card will be all "FFFFFFFFFFFF", it is included in the "std.keys" file that every reader uses and this is how they are able to open every new card. "std.keys" also contains two other keys that are considered default, but that's it. If a card uses other non-default keys, you have to provide them yourself.
	
Now when writing the Skylander NFC dumps, they are two methods - using Phone's NFC or external NFC Reader/Writer. Follow some of the internet guides for those as basically they will show you each step and where exactly to click. Here i will explain the process itself.

1. You have an empty card with "FFFFFFFFFFFF" keys.
2. You have a Skylander dump from the net (most often in a .dump format).
3. First you need to read the card. If that's an empty card, all keys on it for each Sector will be "FFFFFFFFFFFF", so you can use the "std.keys" to read it.
4. Then you write the Skylander dump on the card, and if you have the proper card, you will get 64 of 64 blocks written. Here, people often get 63 of 64 blocks written, which means Sector 0, Block 0 (the UID block) was not affected because it's Read-Only on this card (since they got the wrong card, which doesn't allow Block 0 Re-Write or UID change).
5. The moment you have a successful write, the keys on the card will be completely different. You will have 16 new keys for each sector that you don't know. If you try to read this card using the "std.keys" - guess what will happen? Nothing, since "std.keys" don't have the keys for it, neither do you. However, if you put this card on the Portal of Power, assuming you got 64 of 64 blocks written, it will work, since it comes from an original Skylander dump someone exported. The Portal will know how to decrypt the card and read it.

* If you want to rewrite this card - there is an app called [SkyKeys Generator](https://skylandersnfc.github.io/SkyKeys-Generator/) that will generate the keys for your card's UID. You need to put this XXXXXX.keys file inside "MifareWindowsTool/keys" folder and use it, instead o the "std.keys" when reading the card. Then you can re-write it as a normal empty card.

* There is also an option here to format or factory reset the card, setting its UID to 00000000000 while using the "MifareWindowsTool" software.
This option uses some kind of security bypass (backdoor commands) or a function left by the chip manufacturer in order to format the card without knowing the keys. On a normal secure Mifare S50 card, you wont be able to format it like that. But it seems the "Chinese Magic Cards" allows this. If you don't have a card that allows UID change, the software will simply crash here.
If you were able to format the card, now it will be just as new empty one and will have the "FFFFFFFFFFFF" keys for each Sector, hence you can start writing again to it another Skylander.
