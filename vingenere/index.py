import vingenere
f = open('possibilidades.txt', 'w+')
cifra = "GQAGZTYIMFNLQLP"
size = 3


all_combinations = vingenere.generate_combinations(size)
print(len(all_combinations))
for chave in all_combinations:
    texto_decifrado = vingenere.vigenere_decrypt(chave, cifra)
    isValid = vingenere.has_less_than_three_consecutive_consonants(texto_decifrado)
    if isValid:
        f.write(texto_decifrado+' - ' + chave +'\n')

