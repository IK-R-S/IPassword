import random
import string
import argparse

parser = argparse.ArgumentParser(prog='ipassword.py', description='Password Generator')

parser.add_argument('--num','-n', dest='num', help='Specifies the number of characters in the password')

args = parser.parse_args()

def generate_password(num_char):
    char = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(char) for _ in range(int(num_char)))
    return password

length = args.num
new_password = generate_password(length)
print(f"\n\033[1;0;0mPASSWORD: \033[1;33m{new_password}\033[0;0;0m\n")

