## rails-angular2

Demo: https://nameless-mesa-90703.herokuapp.com

**Funções do app**

* [Cadastro de usuários]
* [Login]
* [Recuperação de senha]
* [Rota protegida]
* [HTTP Service]
* [Utilização de cookie]

```bash
git clone https://github.com/YuriFontella/rails-angular2.git
```

```bash
cd rails-angular2/
```

## Requisito

**Angular CLI:** para rodar o app
```bash
npm install -g @angular/cli@latest
```

## Angular 2
```bash
cd frontend-angular2/
npm install
ng serve
```
No navegador `http://127.0.0.1:4200/`

## Rails
```bash
cd api-rails/
bundle install
rails db:create
rails db:migrate
rails server
```

Nos serviços de http do app, já está apontado para o rails hospedado no heroku. O que torna dispensável a utilização do rails em localhost, utilizando a url dev default do ng serve: 127.0.0.1:4200. No rails, não existe a configuração para envio de e-mails.