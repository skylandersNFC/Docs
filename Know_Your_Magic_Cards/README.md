# Know Your Classic and Magic Cards

_This article covers only cards used for Skylanders (Mifare S50 1K)._

## **Type 0**: **GEN1** UID Locked Cards: *

    63 blocks (excluding Block 0) can be re-written multiple times.
    UID cannot be changed. 
    Answers to Chinese magic backdoor commands: NO 

|Protocol | UID Length | Size | Software | Android NFC | ACR122U |
|-----    |------------|------|-----------|-------------|-----------------|
Mifare S50 | 4 Byte | 1kb 16 sectors 64 blocks | [YAMT](https://github.com/skylandersNFC/Yet-Another-Mifare-Tool/) / [MCT](https://play.google.com/store/apps/details?id=de.syss.MifareClassicTool) | Can't change UID (locked) | Can't change UID (locked) |

_Advantages of Gen1 Classic UID Locked Cards:_

    For Skylanders - none.

_Disadvantages of Gen1 Classic Cards:_

    UID cannot be changed.
    If wrong data is written, card is dead permanently.

* Those are the official Mifare Classic S50 1K 4 Byte access cards.
* They are NOT Magic Cards.

## **Type 1**: **GEN1A** UID Changeable Cards: *

    All blocks (including Block 0) can be re-written multiple times 
    Uses "backdoor" technique to change/rewrite UID. 
    UID can be changed multiple times. 
    Answers to Chinese magic backdoor commands (GEN 1A): YES 

|Protocol | UID Length | Size | Software | Android NFC | ACR122U |
|-----    |------------|------|-----------|-------------|-----------------|
Mifare S50 | 4 Byte | 1kb 16 sectors 64 blocks | [YAMT](https://github.com/skylandersNFC/Yet-Another-Mifare-Tool/) / [MCT](https://play.google.com/store/apps/details?id=de.syss.MifareClassicTool) | Don't Support UID Changing | Support UID changing |

_Advantages of Gen1A Magic Cards:_

    Super fast to change the UID.
    Recoverable after invalid data written.
    Cost-effective for Mifare S50 cloning.

_Disadvantages of Gen1a Magic Cards:_

    For Skylanders - none.

* UID Changeable cards are used to duplicate Mifare Classic S50 1K 4 Byte access cards.
* Those are also know as **Chinese Magic Cards**.
* Generation 1A tags are unlockable with code 0x43 0x40.
* There is also Generation 1B tags that are generation 1A tags with custom unlock code.

## **Type 2**: **GEN2** CUID Cards: *

    All blocks (including Block 0) can be re-written multiple times.
    Not easily detectable by a system with "anti-clone" feature 
    IMPORTANT: Card will die if an invalid Block 0 is written 
    Answers to Chinese magic backdoor commands: NO 

|Protocol | UID Length | Size | Software | Android NFC | ACR122U |
|-----    |------------|------|-----------|-------------|-----------------|
Mifare S50 | 4 Byte | 1kb 16 sectors 64 blocks | [YAMT](https://github.com/skylandersNFC/Yet-Another-Mifare-Tool/) / [MCT](https://play.google.com/store/apps/details?id=de.syss.MifareClassicTool) | Support UID Changing | Support UID changing |

_Advantages of Gen2 Magic Cards:_

    Easy to change UID on the Android Phone.
    Cover most access systems, no backdoor.

_Disadvantages of Gen2 Magic Cards:_

    Cause dead sector if written with invalid access control byte.
    Unfixable if written with invalid block 0.

* There is also a Gen2 OTW **FUID** type which is "One-Time Write UID" (Once written, UID cannot be changed). Avoid those.
* Also **not all Gen 2 CUID tags are exactly the same** either, because it depends who manufactures them.
* **Most** Gen2 CUID tags will have `SAK: 08` and `ATQA: 0F01`. Those will be recognized as "**NXP Mifare Classic (MF1S50)**".
* **Some** Gen2 CUID tags will have `SAK: 08` and `ATQA: 0004`. Those will be recognized as "**Unknown Mifare Classic IC, possibly cloned**".
* However **others** Gen2 CUID tags have `SAK: 81` and `ATQA: 0004`. Those will be recognized as "**Unknown IC**" or "**Not a MIFARE Classic tag!**" and might not work for Skylanders.
* Read more about it here: **[Mifare Classic - SAK Swapping Explained](https://gist.github.com/equipter/3022aea4e371e585ff6e46de637e7769)**
* And more about the different SAK and ATQA types here: **[ISO/IEC 14443 Type A](https://nfc-tools.github.io/resources/standards/iso14443A/)**

## **Type 3**: **GEN3** Cards *

|Protocol | UID Length | Size | Mechanism | Android NFC | ACR122U |
|-----    |------------|------|-----------|-------------|-----------------|
Mifare S50 | 4 Byte / 7 Byte | 1kb 16 sectors 64 blocks | Backdoor Command | Don't Support UID Changing | Support UID changing |

_Advantages of Gen3 Magic Cards:_

    More protocols support
    New Mechanism to change the UID
    UID can be locked permanently

_Disadvantages of Gen3 Magic Cards:_

    Locked UID cannot be unlocked

* Those use another type of backdoor command compared to Gen1.

## **Type 4**: Ultimate Magic Gen 4 *

_Advantages of Gen4 Magic Cards:_

    Use latest technology, have a lot of extra features.

_Disadvantages of Gen4 Magic Cards:_

    Expensive

* The Ultimate Magic Card is multi-purpose emulation card, supporting customisable card type, card configuration and functionality mode.
It is essentially a completely configurable emulation platform in card format. Those are also expensive.

**_Sources:_**

[http://www.proxmark.org/forum/viewtopic.php?id=6545](http://www.proxmark.org/forum/viewtopic.php?id=6545)

[https://lab401.com/products/ultimate-magic-card-gen4](https://lab401.com/products/ultimate-magic-card-gen4)

[https://lab401.com/blogs/academy/know-your-magic-cards](https://lab401.com/blogs/academy/know-your-magic-cards)

[https://shop.mtoolstec.com/product/uid-changeable-1k-s50-chinese-magic-card](https://shop.mtoolstec.com/product/uid-changeable-1k-s50-chinese-magic-card)

[https://shop.mtoolstec.com/whats-the-difference-between-3-generations-of-mifare-magic-card.html](https://shop.mtoolstec.com/whats-the-difference-between-3-generations-of-mifare-magic-card.html)

[https://www.everythingid.com.au/rfid-access-cards-c-3/uid-changeable-m1-s50-block-0-writable-cuid-fuid-gen1-gen2-card-p-8](https://www.everythingid.com.au/rfid-access-cards-c-3/uid-changeable-m1-s50-block-0-writable-cuid-fuid-gen1-gen2-card-p-8)


