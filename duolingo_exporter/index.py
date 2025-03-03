from bs4 import BeautifulSoup

def extract_words_from_ul(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as file:
        html_content = file.read()
    
    soup = BeautifulSoup(html_content, "html.parser")
    
    list_items = soup.find_all("li", class_="_2g-qq")
    
    extracted_data = []
    
    for li in list_items:
        h3_tag = li.find("h3")
        p_tag = li.find("p")
        
        if h3_tag and p_tag:
            extracted_data.append(f"{h3_tag.text};{p_tag.text}")
            extracted_data.append(f"{p_tag.text};{h3_tag.text}")
    
    with open(output_file, "w", encoding="utf-8") as out_file:
        out_file.write("\n".join(extracted_data))
    
    print(f"Extração concluída! Dados salvos em {output_file}")

extract_words_from_ul("input.txt", "output.txt")
