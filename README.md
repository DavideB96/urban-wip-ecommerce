# Urban WIP — E-commerce Front-End

Urban WIP è un progetto e-commerce front-end sviluppato per simulare un’esperienza di acquisto moderna, con focus su **UX, gestione dello stato lato client e interazioni dinamiche**.

## 🚀 Overview

L'applicazione permette agli utenti di:

- esplorare prodotti in una UI responsive
- aggiungere articoli al carrello
- gestire una lista preferiti
- visualizzare e modificare il carrello in tempo reale

Tutti i dati vengono persistiti tramite **LocalStorage**, garantendo continuità anche dopo il refresh.

---

## 🧠 Core Features

### 🛒 Carrello dinamico
- aggiunta prodotti
- incremento/decremento quantità
- rimozione articoli
- calcolo totale in tempo reale
- persistenza dati con `localStorage`

### ❤️ Sistema preferiti
- toggle prodotti preferiti
- stato UI sincronizzato
- lista preferiti in offcanvas
- persistenza lato client

### 🎯 UI interattiva
- toast feedback all’utente
- navbar dinamica (scroll + hover)
- effetti hover su card e immagini
- offcanvas per una UX moderna

### 📱 Responsive Design
- layout adattivo mobile-first
- ottimizzazione immagini e componenti
- gestione spazi e interazioni su dispositivi piccoli

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Bootstrap 5**
- **LocalStorage API**

---

## ⚙️ Architettura & Logica

Il progetto è costruito seguendo una logica modulare lato client:

- gestione stato tramite array (`cart`, `favorites`)
- sincronizzazione UI ↔ stato
- rendering dinamico DOM (`renderCart`, `renderFavorites`)
- separazione logica:
  - update UI
  - gestione eventi
  - persistenza dati

---

## 🎯 Obiettivi del progetto

Questo progetto è stato sviluppato per dimostrare competenze in:

- DOM manipulation avanzata
- gestione dello stato senza framework
- progettazione UI/UX
- sviluppo responsive
- simulazione logiche reali di e-commerce

---

## 🔮 Possibili evoluzioni

- migrazione a **React**
- integrazione backend (Node.js / Express)
- database (MongoDB / Firebase)
- autenticazione utenti
- API prodotti
- sistema checkout reale

---

## 📂 Setup

```bash
git clone https://github.com/DavideB96/urban-wip-ecommerce.git
cd urban-wip-ecommerce

---

## 👨‍💻 Author

Davide Bianchi

---
