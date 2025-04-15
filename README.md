# 🌐 Consulta de Crédito Frontend

Aplicação Angular para consulta de créditos associada à API Consulta de Crédito.

---

## 🚀 Tecnologias Utilizadas

- Angular 19.2.0
- TypeScript
- Docker Compose

---

## 📦 Como Subir o Projeto

Este projeto deve ser clonado no mesmo diretório do projeto backend para que o `docker-compose` funcione corretamente.

1. Clone o repositório do Frontend e da API no mesmo diretório:

```bash
git clone https://github.com/seu-usuario/consulta-credito-frontend.git
git clone https://github.com/seu-usuario/consulta-credito.git
```

2. Dentro da pasta da API (consulta-credito), suba o ambiente:

```bash
docker-compose up --build
```

3. A aplicação estará disponível em:

```
http://localhost:4200
```

---

## 🔧 Configurações Importantes

- O frontend consome a API disponível em `http://localhost:8081`.
- As configurações de CORS já estão prontas no backend.

---

## 🛠️ Build Manual (sem Docker)

1. Instalar dependências:

```bash
npm install
```

2. Rodar o projeto:

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`.

---

## 📄 Licença

Este projeto está sob licença [MIT](LICENSE).

> Feito por [Yasmin de Araújo Arantes Brandão](https://github.com/yasminaraujoarantes)
