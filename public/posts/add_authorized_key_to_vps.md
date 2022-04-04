# How to add authorized ssh key on VPS (Linux)? 

To add your public key to authorized keys on Linux machine,
you need to connect to your machine from already authorized machine (machine with public key that is already authorized)

```sh
ssh user@machine
```

Then you need to go to `~/.ssh` directory

```sh 
cd ~/.ssh
```

And then you should append your public key (`~/.ssh/id_encryption.pub`) to `authorized_keys` file in new line.

```sh
vim authorized_keys
```

# License

**CC BY SA 4.0** mble
