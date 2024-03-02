![Python](https://img.shields.io/badge/python-3.12-blue)
![App](https://img.shields.io/badge/application-password_generator-cyan)

#  IPassword: Fast and secure password generator 🔑
[✅ Web app online](https://ipassword.vercel.app/)
[✅ See our Free API](https://ipassword-api.vercel.app/generate/30)

Password generator written in Python that generates random passwords with uppercase and lowercase letters, digits, and punctuation.

![Ipassword banner](https://github.com/IK-R-S/IPassword/assets/73291742/6ad3a59a-bd26-4ee3-9163-9e4d0ec13d4f)

## Requirements

Make sure you have Python installed on your system. This script has been tested with Python 3.

## Usage

1. Clone or download this repository to your computer.
2. Navigate to the directory where the `ipassword.py` file is located.
3. Run the script by passing the desired number of characters as an argument. For example:

   ```bash
   python ipassword.py --num 12
   ```
   or
   ```bash
   python ipassword.py -n 12
   ```
   This will generate a 12-character password and display it in the terminal.

## Arguments

- `--num` or `-n`: Specifies the number of characters in the password.

## Example

```bash
python ipassword.py --num 16
```

## Disclaimer

The generated passwords are random and may include any combination of uppercase and lowercase letters, digits, and punctuation. Make sure to store your passwords securely.


## Web app (Online, for everyone!)
![image](https://github.com/IK-R-S/IPassword/assets/73291742/58ec0009-978b-4a1b-bceb-70ea88658ff1)
**Acess now:** https://ipassword-web.vercel.app/ 🔑



# IPassword API
Connect your app with a fast and secure password generator

DEMO: https://ipassword-api.vercel.app/generate/8

**How it works:** 

`https://ipassword-api.vercel.app/generate/<number of characters to create the password>`

`https://ipassword-api.vercel.app/status`

`https://ipassword-api.vercel.app/about`

## A single request, a new password 🪄
just one GET method to generate a new and random secure password, **try it now**:

[Docs](https://ipassword-api.vercel.app/about)
