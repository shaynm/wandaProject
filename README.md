חנות התכשיטים של וונדה
אתר סחר לתכשיטים של וונדה.
פרוייקט גמר פול סטאק האקר יו

טכנולוגיות בשימוש:

- Javascript
- Node js
- Express js
- MongoDB
- React

גיט:
git clone https://github.com/shaynm/wandaProject.git

התקנת לקוח
פתח טרמינל חדש והכנס:
cd WandaProject
cd client
npm install

הערה חשובה:
כדי להריץ את הפרויקט, ייתכן שתצטרך להריץ
** npm install --force **

לטובת נוחות הבודק הוספתי כבר באופן חריג את קבצי ה env הרלוונטים
מוכנים לשימוש.

הפעלת האפליקציה:
npm start

התקנת השרת:
cd WandaProject
cd server
npm install

לטובת נוחות הבודק הוספתי כבר באופן חריג את קבצי ה env הרלוונטים
מוכנים לשימוש.

הפעלת השרת:
nodemon server

התנתקות אוטמטית:
קיים באתר מצב התנתקות אוטמטי לאחר כ 4 שעות בקומפוננטה
SessionTimeoutChecker

ניהול המלאי:
קיים ביוזר אדמין בלבד
ניתן לשנות לערוך למחוק להוסיף כל דבר במלאי החנות

כללים חשובים:
ניתן לשנות יוזר מאדמין ללא אדמין רק דרך הדאטה בייס ישירות.
חיברתי כבר את המערכת לדאטה בייס באטלס מיכוון שהכנסתי כבר את הנתנונים על מנת שתוכלו לראות את האתר בשלומותו בעת הבדיקה
על מנת לבדוק את הדאטה בייס הקיים שלי הכנתי 2 יוזרים

יוזר אדמין:
שם משתמש: bdikaadmin
סיסמא:Aa1234567!

יוזר רגיל:
שם משתמש:bdika
סיסמא:Aa1234567!

ניתן ליצור דאטה בייס חדש ההוראות מפורטות מטה.

# Wanda's Project Jewelry online store.

Important rules:
It is possible to change a user from admin to non-admin only through the database directly.
I have already connected the system to the Atlas database, as I have entered the data so that you can see the site in its entirety during the test.
To check my existing database, I created two users:

Admin User:
Username: bdikaadmin
Password: Aa1234567!

Regular User:
Username: bdika
Password: Aa1234567!

### A full stack e-commerce website for Wanda Jewelry.

## Stacks

- Javascript
- Node js
- Express js
- MongoDB
- React

### Clone Repository

```
git clone https://github.com/shaynm/wandaProject.git
```

## Client Installation

Open a new terminal and insert:

```
cd WandaProject
cd client
npm install
It may be required to run the command
**  npm install --force  **
when running the project
```

### Run client

```
npm start
```

#### Add .env. to local file to root client directory

**Utilize Uploaded .env Files for Project Convenience
A departure from the norm has been made in this project, where the .env files have already been uploaded to Git for the convenience of reviewers. This has been done to facilitate the review process.
**

```
REACT_APP_API =
```

## Server Installation

Open a new terminal and insert:

```
cd WandaProject
cd server
npm install
```

### Run Server

```
nodemon server
```

#### Add .env file to root server directory

**Utilize Uploaded .env Files for Project Convenience
A departure from the norm has been made in this project, where the .env files have already been uploaded to Git for the convenience of reviewers. This has been done to facilitate the review process.
**

```
NODE_ENV=development
PORT= // PORT NUMBER
dataBase= // Database-url
secretKey= // String
```
