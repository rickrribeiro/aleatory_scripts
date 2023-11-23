import itertools
def generate_combinations(size):
    characters = 'abcdefghijklmnopqrstuvwxyzç'
    all_combinations = itertools.product(characters, repeat=size)
    second_character_options = ['c', 'f', 'i', 'm', 'q', 'w', 'z']
    all_combinations_strings = []
    #for second in second_character_options:
    second='i' # PQ TA BUGANDO O SECOND, TESTANDO UM POR VEZ
    all_combinations_strings.extend(['f'+second+''.join(combination) for combination in all_combinations])
    return all_combinations_strings
# def generate_combinations(size):
#     characters = 'abcdefghijklmnopqrstuvwxyzç'
#     all_combinations = itertools.product(characters, repeat=size)
#     all_combinations_strings = ['f'+''.join(combination) for combination in all_combinations]
#     return all_combinations_strings

def vigenere_decrypt(key, text):
    key = key.upper()
    key_repeated = (key * (len(text) // len(key))) + key[:len(text) % len(key)]

    decrypted_text = ""

    for i in range(len(text)):
        char = text[i]
        if char.isalpha():
            key_char = key_repeated[i % len(key)].upper() if char.isupper() else key_repeated[i % len(key)].lower()
            decrypted_char = chr((ord(char) - ord(key_char)) % 26 + ord('A')) if char.isupper() else chr((ord(char) - ord(key_char)) % 26 + ord('a'))
            decrypted_text += decrypted_char
        else:
            decrypted_text += char

    return decrypted_text

def has_less_than_three_consecutive_consonants(s):
    consonants = 'bcdfghjklmnpqrstvwxyz'
    common_consonant_combinations = [
        'br', 'bl', 'ch', 'cl', 'cr', 'ss', 'rr' 'dr', 'fl', 'fr', 'gl', 'gr',
        'pl', 'pr', 'tr', 'sc', 'sl', 'sm', 'sn', 'sp', 'st', 'br', 'bl',
        'sb', 'sq', 'sd','tr', 'br', 'bl','zz','pf', 'cr', 'pl', 'pr', 'cl', 'qu', 'dr'
    ]
    consecutive_consonants_count = 0
    # lastChar=None
    # for ch in s:
    #     char = ch.lower()

    #     if char in consonants:
    #         consecutive_consonants_count += 1

    #         if lastChar:
    #             current_combination = lastChar + char
    #             if consecutive_consonants_count >= 2 and current_combination not in common_consonant_combinations:
    #                 return False
    #     else:
    #         consecutive_consonants_count = 0

    #     lastChar = char
    # return True
    for char in s:
        if char.lower() in consonants:
            consecutive_consonants_count += 1
            if consecutive_consonants_count > 4:
                return False
        else:
            consecutive_consonants_count = 0

    return True