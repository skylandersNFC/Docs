--- Skylanders NFC Explained ---

######################

**What cards do I need?**

######################

Look for those parameters:

-----------------------------------------

13.56Mhz

    Explained: This is the NFC frequency. If you see 125 kHz, that's lower RFID frequency that won't work.
	
-----------------------------------------

1k

    Explained: That's the amount of memory on the card, offering 752 bytes of storage.

-----------------------------------------

ReWritable UID [Block 0 (Sector 0) Writable] -

    Explained: From what I've gathered, official MIFARE NFC tags won't allow change of UID (which is stored inside Block 0). That's why you can't replace your official Skywander NFC figure with another NFC dump. You can only change the rest of the blocks on a Skylander figure (from Block 1 to 15) in order to save character level progress and such. The Portal of Power does that when you play.

	However, the NFC cards we are getting from Amazon or AliExpress are MIFARE compatible, meaning they use clone chips, that are actually better. The extra flavor comes from the ability of those chips to change UID (rewrite Block 0), hence you can actually write a whole Skylander NFC dump on them. Those chips are also called "Chinese Magic Card" and you might also see things like "S50" and "MF1" on them, that comes from the MIFARE NFC standard, pointing out they are compatible.

	Also STAY AWAY from any NTAG cards (usually Natg215). Those are for Amiibo, NOT Skylanders.



########################

**What NFC Reader/Writer do I need?**

########################

	You can either use your phone with an NFC app called "MIFARE Classic Tool" or get an ACR122U NFC Reader/Writer. "ACR122U" is very important here! That's a standard which, if you don't have on your NFC device, you can't use it with the proper software (MifareWindowsTool) on PC. Avoid any cheap NFC devices that don't have "ACR122U".



##########################

**How does the NFC card creation process work?**

##########################

	You will find plenty of Skylanders NFC tutorials and non of them explains the actual process. No idea what's up with that. So here is how it actually works:

    Each NFC cards have 16 blocks (from 0 to 15). Inside those blocks is where your Skylanders data goes, as each block contains a key and the data itself (simplified explanation).
    As i said above, with the MIFARE compatible cards (Chinese Magic Card), you can also write data to Sector 0 (inside Block 0), which contains the serial number/chip manufacturers UID.
    Empty NFC cards will have no data on them and an empty key for each block "FFFFFFFF".
	
    In order to read (recognize) an NFC card with your reader, you need to have a collection of each key the card is using for each block. Since the keys for an empty card will be all "FFFFFFFFFFFF", it is included in the "std.keys" file that every reader uses and this is how they are able to open every new card. "std.keys" also contains two other keys that are considered default, but that's it. If a card uses other non-default keys, you have to provide them yourself.
	
    Now when writing the Skylander NFC dumps, they are two methods - using Phone's NFC or external NFC Reader/Writer. Follow some of the internet guides for those as basically they will show you each step and where exactly to click. Here i will explain the process itself.
	
	First you need to read the card. If that's an empty card, all keys on it for each Block will be "FFFFFFFFFFFF", so you can use the "std.keys" to read it.
	
	Then there is the Skylanders dump flashing process. I've seen two approaches here.
	Approach one is best if you only want to flash a skylander on an empty card and call it a day.
	Approach two is more complex and is oriented to the people who want to reuse the same NFC card while flashing different skylanders on it, overwriting the previous dumps.
	
	Approach ONE (single Skylander dump flash) works as follows:

    1. You have an empty card with "FFFFFFFFFFFF" keys.
    2. You have a Skylander dump from the net (most often in a .dump format).
    3. You write this dump on the card, and if you have the proper card, you will get 64 of 64 blocks written. Here, people often get 63 of 64 blocks written, which means Block 0 (the UID block) was not affected because it's Read-Only on this card (since they got the wrong card, which doesn't allow Block 0 Re-Write or UID change).
    4. The moment you have a successful write, the keys on the card will be completely different. You will have 16 new keys for each block that you don't know. If you try to read this card using the "std.keys" - guess what will happen? Nothing, since "std.keys" don't have the keys for it, neither do you. This happens when you flash a random dump from the internet. However, if you put this card on the Portal of Power, assuming you got 64 of 64 blocks written, it will work, since it comes from an original Skylander dump someone exported. The Portal will know how to decrypt the card and read it. But if you want to rewrite this card yourself - you can't do it, since you don't have the keys.

    * There is an option here to format or factory reset the card, setting its UID to 00000000000 while using the "MifareWindowsTool" software.
    From what I've gathered, this option uses some kind of security bypass or a function left by the chip manufacturer in order to format the card without knowing the keys. On a normal secure Mifare S50 card, you should not be able to format it like that. But it seems the "Chinese Magic Cards" allow this. If you don't have a card that allows UID change, the software will simply crash here.
    If you were able to format the card, now it will be just as new empty one and will have the "FFFFFFFFFFFF" keys for each Block, hence you can start writing again to it another Skylander.
	
	Approach TWO (Multiple Skylander flashes while using the card keys)

    1. This approach starts the same way as the one above - you need to read an empty card with the "FFFFFFFFFFFF" keys using the "std.keys". However, I will also explain how to read already used card with different keys (assuming you have them).
    2. Flashing the Skylander dumps from the internet straight to the card here won't work. Those dumps were made from cards which we don't know. You need to know either the card keys or the card original UID in order to generate those keys.
    3. So here we need to prepare the dumps for our own card UID. There is also a tutorial about this, but basically you need to create a dump/export of your own card with its original UID. Once you have this dump, you need to use a Python software called SkyLib which will integrate your own card dump with one of the dumps from the net.
    4. Again watch an internet tutorial on how exactly to use the python script here, but at the end you should have a combination of your own card dump with your original UID + some Skylander dump from the internet. The new created dump will be specially made for your card UID and will work with the keys for that card.
    5. Now you also need to get the keys for this card. There is another script in the SkyLib software that will let you generate keys for a card while providing UID. You need to give it your own card original UID and this way you will have the new 16 keys. Store them in a file like the "std.keys" file is stored. I usually use the card UID as the file name so it will be something like "F495F74.keys" and inside of it there will be 16 keys.
    6. Now flash the dump you've created (the one that is a combination from your own card export + a Skylander dump from the net). If done properly, you will get a working Skylander card for your Portal of Power.
    7. However, now you can also read this card. After the flashing, the keys won't be "FFFFFFFFFFFF" anymore, but you should also have the new keys, since you've created them earlier using the python script and saved them to a file like "F495F74.keys".
    8. Now using those keys (instead of the "std.keys") you will read all of the 16 blocks on this card and can actually rewrite it. From here on the process is the same as above, but instead of "std.keys" each time use your own created keys.
    9. If you want to write a new dump, don't forget to integrate it with your own card export/dump (combine the card export with a Skylander dump). If you don't do this and flash a Skylander from the net directly, the UID will change and you will lose your keys. However, if you always prepare your dumps using the python script, the UID will stay the same and you will always have the keys for it.
    * Bear in mind that if you use the same UID on two different cards, they will work independently on the portal, but if they are put together, the portal will return an error for the second card. That's why I tend to keep the original unique UID for each card and store the keys for them on several "UID_Number.keys" files.
	
###############################

**How to make Skylanders Imaginators NFC Cards?**

###############################

	For those, you need to have all of the NFC card requirements from above + a new one called "Gen 2" or "CUID". Basically, most of the Skylanders NFC cards are Gen1 (or UID) hence this is often neglected or not mentioned at all. However, since Imaginators have a special encryption for the senseis in order to bypass it, get the next generation cards labeled "Gen 2" or "CUID". They are a bit more expensive, but you won't need that many for Imaginators only.