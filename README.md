# 🎬 Desafio Group Generation: App de Filmes
![logo](/Movie_Classifier/assets/banner.png)
Este repositório contém a solução para o desafio de consumo da API pública OMDb. O objetivo do projeto é desenvolver um aplicativo mobile que permite buscar informações sobre filmes e gerenciar uma lista de favoritos com funcionalidades básicas, incluindo um filtro para facilitar a navegação.

## 📋 Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)
## 📝 Sobre o Projeto
Este aplicativo mobile foi desenvolvido para consumir a API pública do OMDb, permitindo aos usuários buscar informações detalhadas sobre filmes e gerenciar seus favoritos com persistência local.

## API Endpoint utilizado:

```ruby
https://www.omdbapi.com/?apikey=SUA_CHAVE&t=NOME_DO_FILME
```
## 🚀 Funcionalidades
- **Busca de Filmes**: Permite buscar filmes pelo título diretamente na API do OMDb.
- **Adicionar aos Favoritos**: Os usuários podem salvar filmes como favoritos, armazenando-os localmente com AsyncStorage.
- **Listar Favoritos**: Exibe uma lista dos filmes favoritos com detalhes como título, ano de lançamento e pôster.
- **Remover Favoritos**: Permite excluir um filme da lista de favoritos.
- **Editar Nota**: (Funcionalidade planejada)
- **Filtro de Favoritos**: Filtra os filmes favoritos para facilitar a navegação na lista.
## 💻 Tecnologias Utilizadas
As seguintes tecnologias e ferramentas foram utilizadas no desenvolvimento do projeto:

- **[Figma](https://www.figma.com/design/ZZhjhgAJqwd6zUiLwL0AkA/Desafio?node-id=0-1&t=A9a3qPrutO4fNEOz-1)** - Design da interface
- **[React Native](https://reactnative.dev/docs/environment-setup)** - Framework para desenvolvimento mobile
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Tipagem estática para JavaScript
- **[React Hooks](https://react.dev/reference/react/hooks)** - Gerenciamento de estado e ciclo de vida dos componentes
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/usage/)** - Armazenamento local dos favoritos
- **[Tailwind CSS](https://www.nativewind.dev)** (via NativeWind) - Estilização da interface, proporcionando uma UI responsiva e moderna
## 📦 Instalação e Execução
Pré-requisitos
**[Node.js](https://nodejs.org/en)** e **[Expo](https://nodejs.org/en)** instalados na máquina.
Passos para executar o projeto
1. Clone o repositório:
``` bash
git clone https://github.com/fnguedes/Desafio_Group_Generation.git
```
2. Acesse o diretório do projeto:
```bash
cd Desafio_Group_Generation
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o projeto com Expo:
```bash
npm start
```
5. Escaneie o QR Code no terminal com o aplicativo Expo Go para rodar a aplicação no dispositivo móvel.

***
## 📂 Estrutura do Projeto
```
Desafio_Group_Generation/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── screens/          # Telas da aplicação (Busca, Favoritos, Detalhes)
│   ├── assets/           # Imagens e recursos estáticos
│   └── utils/            # Funções utilitárias e helpers
├── App.tsx               # Arquivo principal
├── package.json          # Dependências do projeto
└── README.md             # Documentação do projeto
```
## 🤝 Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
``` bash
git checkout -b feature/nome-da-feature
``` 

3. Commit suas mudanças:
```bash
git commit -m 'Adiciona nova funcionalidade'
```

4. Envie as mudanças para a sua branch:
```bash
git push origin feature/nome-da-feature
```
5. Abra um Pull Request.

***
## 🛡️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## ✨ Contato
Criado por Fellipe Guedes. Entre em contato para dúvidas ou sugestões!
