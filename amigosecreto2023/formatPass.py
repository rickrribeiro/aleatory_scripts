import json

def json_to_txt(json_data, output_file):
    with open(output_file, 'w') as txt_file:
        for key, value in json_data.items():
            senha = value.get("senha")
            if senha is not None:
                txt_file.write(f"{key} - {senha}\n")

def main():
    input_file = "pass.json"  # Substitua pelo nome do seu arquivo JSON
    output_file = "passss.txt"  # Substitua pelo nome desejado para o arquivo de saída TXT

    try:
        with open(input_file, 'r') as file:
            json_data = json.load(file)

        json_to_txt(json_data, output_file)

        print(f"Arquivo TXT gerado com sucesso: {output_file}")

    except FileNotFoundError:
        print(f"Erro: Arquivo '{input_file}' não encontrado.")
    except json.JSONDecodeError:
        print(f"Erro: Não foi possível analisar o arquivo JSON '{input_file}'.")

if __name__ == "__main__":
    main()
