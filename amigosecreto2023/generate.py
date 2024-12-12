import json
import random

def generate_secret_friend(json_data):
    people = list(json_data.keys())
    random.shuffle(people)

    result_json = {}
    passFiles = {}
    for i, person_name in enumerate(people):
      amigo_secreto = people[(i + 1) % len(people)]
      image_url = json_data[person_name]

      password=random.randint(100000, 950000)
      result_json[amigo_secreto] = {
        "image": image_url,
        "amigoSecreto": person_name,
        "senha": str(password)
      }  

      passFiles[amigo_secreto] = {
        "senha": password
      }

    return result_json, passFiles

if __name__ == "__main__":
    input_json = {
    "Roberto": "",
    "MHelena": "",
    "Milena": "",
    "Rafael": "",
    "Rick": "",
    "Lara": "",
    "Guiga": "",
    "Ruy": "",
    "Romilda": "",
    "Paula": "",
    "Guto": "",
    "Caca": "",
    "Bia": "",
    "Davi": "",
    "Claudio": "",
    "Zizi": "",
    "Daniel": "",
    "Matheus": "",
    "Ruyzinho": "",
    "Tarsila": "",
    "Ruy neto": "",
    "Guilherme": "",
    "Luzinete": "",
    "Edla": "",
    "Ericka": "",
    "Emilinha": "",
    "Gustavo": "",
    "Roberta": "",
    "Joao marcelo": "",
    
}
    
    input_json2 = {
    "Naomy": "",
    "Abraham": "",
    "Ricardo": "",
    "Eleo": "",
    "Osmary": "",
    "Tania": "",
    "Carlo": "",
    "Dennys": "",
    "Lourdes": "",
    "Zamyra": "",
    "Kassandra": "",
    "Sean": ""
}


    output_json, passFiles = generate_secret_friend(input_json)
    output_json2, passFiles2 = generate_secret_friend(input_json2)
    with open("./src/data/sorteios.json", "w") as output_file:
        json.dump(output_json, output_file, indent=2)
    with open("pass.json", "w") as output_file2:
        json.dump(passFiles, output_file2, indent=2)
    
    with open("./src/data/sorteios2.json", "w") as output_file:
        json.dump(output_json2, output_file, indent=2)
    with open("pass2.json", "w") as output_file2:
        json.dump(passFiles2, output_file2, indent=2)
