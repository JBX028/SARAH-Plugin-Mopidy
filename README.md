Mopidy client for SARAH
==========================

INTRODUCTION
------------

How to control Spotify with [SARAH](http://encausse.wordpress.com/s-a-r-a-h/s-a-r-a-h-documentation/) using Mopidy

PREREQUISITES
-------------

Install one of the following version of mopidy :

- [Mopidy](https://github.com/mopidy/mopidy)
- [Mopidy for Raspberry PI](https://github.com/woutervanwijk/Pi-MusicBox)

If you choose a Raspberry PI, a usb sound card is almost required to have enough quality.
Personally, I purchased [iMic](http://store.griffintechnology.com/catalog/product/view/_ignore_category/1/id/623/s/imic/)

Install this plugin into `/plugins`

Download this [zip](https://docs.google.com/file/d/0B9GNu6yI-oQkMGxWUFFCckptMzQ/edit?usp=sharing) and unzip the content into this plugin directory at the same level than `Lib`


CONFIGURATION
-------------

Configure file `mopidy.prop` with the host and port of your mopidy server.

USAGE
-----

1. Start Mopidy
2. Select a music using one of the [existing clients](http://mpd.wikia.com/wiki/Clients)
3. Control Mopidy with your voice (next song, stop music, etc...)

SARAH use [mpc command line tool](http://mpd.wikia.com/wiki/Client:Mpc) to send commands to Mopidy
