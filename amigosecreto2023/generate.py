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
        "senha": password
      }  

      passFiles[amigo_secreto] = {
        "senha": password
      }

    return result_json, passFiles

if __name__ == "__main__":
    input_json = {
    "Roberto": "https://drive.google.com/uc?export=download&id=1dxJRb-iX4feKET0WlvKriTLiJv8IqoDX",
    "MHelena": "mhurl2",
    "Milena": "miurl3",
    "Rick": "url4",
    "Lara": "url5",
    "Edla": "url6",
    "Ericka": "url7",
    "Emilia": "url8",
    "Arthur": "url9",
    "Gustavo": "url10",
    "Paula": "url11",
    "Guto": "url12",
    "Carol": "url13",
    "Bia": "url14",
    "Davi": "url15",
    "Edu": "url16",
    "Luciana": "url17",
    "Ruy Junior": "url18",
    "Tarsila": "url19",
    "Ruy neto": "url20",
    "Guilherme": "url21",
    "Luzinete": "https://drive.google.com/uc?export=download&id=1JAykIW0P4vKremf5MyTLLhOK_LBU5NxB",
    "Ruy": "url23",
    "Romilda": "url24",
    "Claudio": "url25",
    "Zizi": "url26",
    "Daniel": "url27",
    "Matheus": "url28"
}


    output_json, passFiles = generate_secret_friend(input_json)
    with open("output.json", "w") as output_file:
        json.dump(output_json, output_file, indent=2)
    with open("pass.json", "w") as output_file2:
        json.dump(passFiles, output_file2, indent=2)
