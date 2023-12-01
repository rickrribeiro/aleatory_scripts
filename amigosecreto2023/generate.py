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
    "Roberto": "https://drive.google.com/uc?export=download&id=1dxJRb-iX4feKET0WlvKriTLiJv8IqoDX",
    "MHelena": "https://drive.google.com/uc?export=download&id=1AQB6pLVZ5AaL8KAKvXUf2Ihv8PsqRPWH",
    "Milena": "https://drive.google.com/uc?export=download&id=18wPLxYj7H16-3LbsG8mMiFGPsAE3QwH6",
    "Rick": "https://drive.google.com/uc?export=download&id=17psMXAHr8_HQ5gJIOtooS8t5GFNHEYdQ",
    "Lara": "https://drive.google.com/uc?export=download&id=179BEQNKRvEBDr5pucQxjPtGSw8fQS6Ae",
    "Edla": "https://drive.google.com/uc?export=download&id=13rC7djMr-nxbd_QYGWI9dlGI60NC9vFH",
    "Ericka": "https://drive.google.com/uc?export=download&id=1z3VNQ0RldLBIDuBVzpWvQ6O4f5CvqWUM",
    "Emilinha": "https://drive.google.com/uc?export=download&id=1lORVdff4auwoxIHA9taZNLuE7OZv14XL",
    "Arthur": "https://drive.google.com/uc?export=download&id=1PEvwxUbetycpjg6ji8Ne_BPzJOUgnoyD",
    "Gustavo": "https://drive.google.com/uc?export=download&id=1hiogywTYiPZn56j8jCbeKCDkn-uEZ1Ku",
    "Paula": "https://drive.google.com/uc?export=download&id=1l91_0Fq-7xPWrojlIwumYv06Jy7V3H2M",
    "Guto": "https://drive.google.com/uc?export=download&id=1-MK2AmKEJsLPBI5HjB9DKYvCiODWF2Qr",
    "Caca": "https://drive.google.com/uc?export=download&id=1aLXTrSwNrl6P56gCvHprDn5_Gqzn48BR",
    "Bia": "https://drive.google.com/uc?export=download&id=1REPq6OruGogQmjxxyiRBkXBUPZKXc7l8",
    "Davi": "https://drive.google.com/uc?export=download&id=19AlIPgJ2mK82EtohQDK1ZM1CEqqOQE1s",
    "Edu": "https://drive.google.com/uc?export=download&id=1aqulbOmntv6y0jfCLH3-Nynr1c2gYGeK",
    "Luciana": "https://drive.google.com/uc?export=download&id=17EkFG_eOhpRip3Or4uNG3DiRmX0RJ1EC",
    "Ruyzinho": "https://drive.google.com/uc?export=download&id=1GNmP_fqMNyqJv-OZWKw1LWwwAPJ29a94",
    "Tarsila": "https://drive.google.com/uc?export=download&id=1TPCTL_pUL0dtGfbzhDsif5d5Fa7i3TNs",
    "Ruy neto": "https://drive.google.com/uc?export=download&id=1MdmKOHDpkDydjLdbNipbnGqtss52-QoD",
    "Guilherme": "https://drive.google.com/uc?export=download&id=1FNrA7fzdBzxSJZGjxMmPk0rqMLp221Z5",
    "Luzinete": "https://drive.google.com/uc?export=download&id=1JAykIW0P4vKremf5MyTLLhOK_LBU5NxB",
    "Ruy": "https://drive.google.com/uc?export=download&id=1HbhLyoI5pYb3ZkxNIusMkQtllcHFgCwZ",
    "Romilda": "https://drive.google.com/uc?export=download&id=1pFEPiJT_hqramDa4hVTQAF_CU7LYkdGv",
    "Claudio": "https://drive.google.com/uc?export=download&id=1dzuoJOOH2t1hZyyx334P3dy5SujRCwY4",
    "Zizi": "https://drive.google.com/uc?export=download&id=12G5mF9EJXiDZ0K23DPLNKb78lClwd3fE",
    "Daniel": "https://drive.google.com/uc?export=download&id=10delpFGLECpCmBHYsiDy5NYUBgODkQ_J",
    "Matheus": "https://drive.google.com/uc?export=download&id=1ulCqJ5uHH0WL0km2HsgdfYSzhMMlHq_X"
}


    output_json, passFiles = generate_secret_friend(input_json)
    with open("./src/data/sorteios.json", "w") as output_file:
        json.dump(output_json, output_file, indent=2)
    with open("pass.json", "w") as output_file2:
        json.dump(passFiles, output_file2, indent=2)
