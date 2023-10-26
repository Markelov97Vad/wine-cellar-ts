<h1 align="center">Веб-сайт: "Wine cellar" (Frontend)</h1>

<div align="center">
  <a href="https://my-wine-cellar.space/">
    <img width="575" alt="Основной функционал приложения" src="./src/public/images/wine-cellar.gif">
  </a>
</div>

_____

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории, эксплуатация</a></li>
      <li><a href="#functionality">Функционал</a></li>
      <li><a href="#enhancement">Планы по улучшению</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Сайт <a href="https://my-wine-cellar.space/" target="_blank">"Wine cellar"</a> был разработан для моей мамы, чтобы она могла фиксировать продегустированные вина (Она большая любительница посещать винные дегустации) добавлять комментарии и указывать рейтинг. А затем искать нужные ей вина в своей коллекции. Проект изначально был реализован на <a href="https://react.dev/">React</a>, в последствии перенесен на <a href="https://nextjs.org/">Next</a>, где добавились еще функции. Кочено, вы также можете пользоваться этим веб-сайтом для хранения своих винных предпочтений 😊.
<br></br>
Проект размещен на сервере <a href="https://nextjs.org/">Yandex Cloud</a> (Frontend, Backend) IP: 158.160.113.66

____

<b>Ссылки на проект:</b>

Frontend (деплой): https://my-wine-cellar.space/

Backend: https://api-my-wine-cellar.space/

Backend (repository): https://github.com/Markelov97Vad/wine-cellar-ts-api

___

<a name="technologies"><h2>2. Стек технологий</h2></a>

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux&nbsp;Toolkit-333?style=for-the-badge&logo=redux&logoColor=7549bc)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

____

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории, эксплуатация</h2></a>
1. `git clone https://github.com/Markelov97Vad/wine-cellar-ts.git` - клонировать репозиторий на свое устройство (HTTPS)
2. `npm i` - установить зависимости
3. `npm run build` - создать оптимизированную сборку приложения
4. `npm run start` - запустить приложение

<h3>Важно!</h3>Для корректной работы в локальном репозитории следует также клонировать <a href="https://github.com/Markelov97Vad/wine-cellar-ts-api">Backend</a> и запустить в первую очередь его командой `npm run dev` (после установки зависимостей), а также СУБД NoSQL <a href="https://www.mongodb.com/">MongoDB</a>.

____

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>4. Функционал</h2></a>

- Поиск вина по названию, с филтрацией по типу и цвету среди всех вин
- Поиск только своих добавленных вин
- Кеширование данных ввода поиска и выбранных фильтров отдельно на каждой странице (```Session Storage```)
- Регистрация и авторизация пользователя
- Аутентификация пользователя по ```JWT``` токену
- Добавление вина в коллекцию, указание рейтинга, комментария, ссылка на изображение
- Выбор сорта винограда, типа и цвета из слектора ```react-select```
- Валидация данных в форме
- Возможность открыть интересующее вино на другой странице, где находится вся информация о нем, с возможностью удаления (***Если данное вино ваше***), увидеть комментарий пользователя (***Если пользователь его сотавил***)
- Возможность заменить изображение (***Если данное вино ваше***)
- Добавить или удалить из избранного
- Личный кабинет, где хранятся избранные вина и данные пользователя
- Возможность изменять данные пользователя
- Адаптивная верстка под все виды устройств

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>5. Планы по улучшению</h2></a>
- Оптимизировать компоненты (разгрузить их)
- Добавить анимацию с помощью ```GSAP```
- Оптимизировать код (убрать лишнии ререндоры)
- Добавить сорта виноградов (расширить список выбора в селекторе)
- Перенести проект на ```React Native```

___
