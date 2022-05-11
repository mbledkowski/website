# Listening to Spotify fully open-source way
Hi, in this article I am going to show you how to listen to Spotify using only open-source software.

## First of all you need to install those two packages:
 - spotifyd
 - spotify-qt

## Second of all you need to configure `spotifyd`. 
 1. Create if not present, and edit the `~/.config/spotifyd/spotifyd.conf` file.
 2. Assign your Spotify nickname to the `username` variable.
	 1. To get your nickname open `open.spotify.com`.
	 2. Click on your profile icon and select `Profile`.
	 3. Click on three dots and select `Copy link to profile`
	 4. `https://open.spotify.com/user/themcmaciej?si=496a60d5280d4360` - in place of `themcmaciej` there will be your nickname
 3. Provide your password. There are three ways to do this.
	 1. `password` - just put your password in the config
	 2. `password_cmd` - provide a command that would output on STDOUT your password
		 1. You can use the `cat` command to print your password from the file - `cat /.config/spotifyd/.env`
	 3. `use_keyring` - your password is being taken from the system's keyring
 4. Set bitrate using the `bitrate` variable
	 1. E.g. `bitrate = 320`
 5. Enable cache by setting `no_audio_cache = false`
 6. Set `initial_volume` to a value between 0 and 100 for your initial volume
	 1. If `spotifyd -V` shows you version lower than 0.4 use string as a value - `initial_volume = "45"`
	 2. If it displays a version equal to or higher than 0.4 use an integer as a value - `initial_volume = 45`

For example of `spotifyd.conf` you may want to check out [my dotfiles repository](https://github.com/mbledkowski/dotfiles/tree/main/global/home/mble/.config/spotifyd). 
## Last but not least, you need to set up `spotify-qt`.
 1. Go to https://developer.spotify.com/dashboard/
 2. Create a new app
 3. Copy `Client ID` and `Client Secret` and enter them in the spotify-qt login screen
 4. In the terminal enter the `which spotifyd` and copy the value
 5. Go to `Settings` > `Spotify` and enter the copied value in `Client Path` 
 6. Check `Start with app`, go to `Configuration` and check `Use global config`
 7. In `General` click the `Start client` or restart an app.
## And that's it, enjoy your fully libre Spotify experience :D
## License
Creative Commons Attribution Non Commercial Share Alike 4.0 International ([CC-BY-NC-SA-4.0](https://spdx.org/licenses/CC-BY-NC-SA-4.0))
