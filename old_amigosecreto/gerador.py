import random

########


### TERRIBLE CODE JUST TO DO IT FAST


###

def getParticipants(participants, participantsClone):
    random.shuffle(participantsClone)
    for i in range(len(participants)):
        print(f'{participants[i]} - {participantsClone[i]}')
        if participants[i] == participantsClone[i]:
            return False
    return True

f = open('participantes.txt', "r")
passwordPageBase = open('password.html', "r").read()
participants = f.read().split('\n')
participantsClone = participants.copy()

while 1:
    isCorrect = getParticipants(participants, participantsClone)
    if isCorrect:
        break
print(participantsClone)

for i in range(len(participants)):
    password = random.getrandbits(128)
    html = passwordPageBase
    replaced = html.replace("{{password}}", str(password))
    replaced = replaced.replace("{{secret}}", str(participantsClone[i]))
    
    newFile = open(f'./participantsPages/{participants[i]}.html', "w")
    newFile.write(replaced)
    participants[i] = f'{participants[i]} - {password}'

newFile = open(f'./senhas.txt', "w")
combs = ""
for i in participants:
    combs+=i+"\n"
newFile.write(combs)
