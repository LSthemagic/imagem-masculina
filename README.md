# NVIZU - Imagem Masculina

Este projeto é uma aplicação web para agendamento de serviços de barbearia, permitindo que os usuários façam reservas facilmente através de diferentes plataformas.

## Tecnologias Utilizadas

- **React**: Para a construção da interface.
- **Tailwind CSS**: Para estilização e layout responsivo.
- **React Icons**: Para ícones da interface.

## Estrutura do Projeto

### Componentes Principais

- **Home**: Componente principal que renderiza a página inicial com um vídeo de fundo e opções de agendamento.

### Funcionalidades

- **Vídeo de Fundo**: Um vídeo de fundo que é reproduzido em loop e sem som.
- **Links de Agendamento**: Links para agendar serviços via Android, iOS e Web.
- **Ícones de Redes Sociais**: Links para WhatsApp e Instagram para contato rápido.

## Instalação

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

### Passos para Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

5. **Abra o navegador** e acesse `http://localhost:3000` para ver a aplicação em funcionamento.

## Estrutura de Diretórios

```
/public
    ├── background.mp4
    └── NVIZU.png
/src
    └── components
        └── Home.jsx
```

## Cores Personalizadas

As cores personalizadas estão definidas no arquivo `tailwind.config.js`:

```javascript
extend: {
  colors: {
    primary: '#1a73e8',
    secondary: '#ffffff',
  },
},
```

## Contato

- **WhatsApp**: [Envie uma mensagem](https://wa.me/5575981902637?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20novo%20servi%C3%A7o!)
- **Instagram**: [@nvizubarbearia](https://www.instagram.com/nvizubarbearia/)

---

Sinta-se à vontade para contribuir com o projeto ou sugerir melhorias!
