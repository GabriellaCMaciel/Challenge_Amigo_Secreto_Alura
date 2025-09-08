# 🎁 Amigo Secreto

![Banner](assets/amigo-secreto.png)

Um aplicativo web divertido para organizar sorteios de **Amigo Secreto**, permitindo adicionar participantes, visualizar a lista e sortear aleatoriamente com efeito de roleta, animação e som de vitória.

---

## 🛠 Funcionalidades

- Adicionar nomes de amigos à lista de participantes  
- Visualizar todos os nomes adicionados  
- Sorteio aleatório com efeito de roleta  
- Destaque visual do nome sorteado com animação CSS  
- Som de vitória ao finalizar o sorteio  
- Validação mínima: exige pelo menos 2 participantes  

---

## ⚡ Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

- HTML5 para a estrutura da página  
- CSS3 para estilo, variáveis, animações e responsividade  
- JavaScript puro (Vanilla JS) para lógica e manipulação do DOM  
- Google Fonts: Inter e Merriweather  

---

## 🎬 Demonstração

![Demonstração do Sorteio](assets/demo.gif)  
> GIF ilustrativo mostrando a animação do sorteio. Substitua pelo seu GIF real.

---

## 💻 Instalação

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/amigo-secreto.git
```

2. Entre na pasta do projeto:
```
cd amigo-secreto
```

3. Abra o index.html no navegador:
```
start index.html      # Windows
open index.html       # MacOS
xdg-open index.html   # Linux
```

Nenhuma dependência externa é necessária.

## 🚀 Uso

1. Digite os nomes dos amigos no campo de entrada e clique em Adicionar

2. Os nomes adicionados aparecerão na lista

3. Clique em Sortear amigo

4. O nome sorteado será destacado com animação e som de vitória

## 📂 Estrutura do Projeto

```
amigo-secreto/   
│   
├── index.html        # Página principal   
├── style.css         # Estilos   
├── app.js            # Lógica do sorteio   
└── assets/   
    ├── amigo-secreto.png  # Banner   
    └── victory.wav        # Som de vitória   
```

## 🎨 Personalização

- Cores e tema: altere as variáveis CSS em :root no style.css

- Tempo da roleta: ajuste 3000 no setTimeout do sortearAmigo()

- Velocidade da roleta: altere o intervalo do setInterval()

- Som de vitória: substitua victory.wav na pasta assets

## 📝 Licença

Este projeto é Open Source e livre para uso pessoal ou comercial.

## ✨ Feito com ❤️ por Gabriella C Maciel

[![Visualizar Online](https://img.shields.io/badge/Visualizar-Online-brightgreen)]()

