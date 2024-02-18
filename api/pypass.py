import random
import string


def generate_password(num_char):
    char = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(char) for _ in range(num_char))
    return password
