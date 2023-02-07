f = open('senhas.txt', "r")
participants = f.read().split('\n')

combs = ""
newFile = open(f'./senhasComLink.txt', "w")
for p in participants:
    part = p.split(' - ')
    combs+=f'https://rickrribeiro.github.io/participantsPages/{part[0]}.html - {part[1]}\n'

newFile.write(combs)