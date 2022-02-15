# Online-service Come&Cook

*Сервис позволяет пользователю пригласить повара к себе домой а поварам свободно оказывать свои услуги.*

<img src="https://imgur.com/G7KLt4V.gif" width="800px"/>



> 1. Вы размещает заявку с описанием тех блюд, которые вы хотели бы поесть, указываете дату, место, количество персон и сумму денег, которые Вы готовы заплатить.
> 2. Вашу заявку видят Повара на сайте
> 3. Повар делает отклик
> 4. Вы обговориваете детали в чате
> 5. Повар приезжает к Вам на мероприятие


### Чтобы запустить проект необходимо: 


Cоздать базу данных в PostgreSQL

```sql
  CREATE USER testUser PASSWORD 'qwerty'
  CREATE DATABASE yourNameDB OWNER testUser
  GRANT ALL PRIVILEGES ON DATABASE yourNameDB TO testUser
```

### В папке `server/`

Создать файл `.env` и прописать данные БД из envsample.txt

```npm
  npm i 
  npx sequelize-cli db:migrate 
  npx sequelize-cli db:seed:all 
  npm start
```

### В папке `client/`

```npm
  npm i
  npm start
```
