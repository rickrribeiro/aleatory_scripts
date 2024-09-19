import json

with open('data.json', 'r') as file:
    data = json.load(file)

def calcular_variacao(atual, anterior):
    variacoes = {}
    for key in atual:
        if key in anterior and isinstance(atual[key], int):
            if key == "myPosition":
                variacao = anterior[key] - atual[key]
            else:
                variacao = atual[key] - anterior[key]
            variacoes[key] = variacao
    return variacoes

for i in range(1, len(data)):
    dia_atual = data[i]
    dia_anterior = data[i-1]
    
    print(f"Variação do dia {dia_anterior['day']} para o dia {dia_atual['day']}:")
    
    variacoes = calcular_variacao(dia_atual, dia_anterior)
    
    for key, variacao in variacoes.items():
        print(f"{key}: {variacao}")
    
    print("-" * 20)
