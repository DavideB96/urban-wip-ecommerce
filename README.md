# Urban WIP — E-commerce Front-End

Urban WIP is a modern front-end e-commerce application built to simulate a modern shopping experience, with a strong focus on **UX, client-side state management, and dynamic interactions**.

## 🚀 Overview

The application allows users to:

- browse products through a responsive UI  
- add items to the cart  
- manage a favorites list  
- view and update the cart in real time  

All data is persisted using **LocalStorage**, ensuring continuity even after page refresh.

---

## 🧠 Core Features

### 🛒 Dynamic Cart
- add products  
- increase/decrease quantity  
- remove items  
- real-time total calculation  
- data persistence with `localStorage`  

### ❤️ Favorites System
- toggle favorite products  
- synchronized UI state  
- offcanvas favorites list  
- client-side persistence  

### 🎯 Interactive UI
- user feedback via toast notifications  
- dynamic navbar (scroll + hover)  
- hover effects on cards and images  
- offcanvas components for a modern UX  

### 📱 Responsive Design
- mobile-first adaptive layout  
- optimized images and components  
- spacing and interaction adjustments for smaller devices  

---

## 🛠️ Tech Stack

- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**  
- **Bootstrap 5**  
- **LocalStorage API**  

---

## ⚙️ Architecture & Logic

The project follows a modular client-side approach:

- state management using arrays (`cart`, `favorites`)  
- UI ↔ state synchronization  
- dynamic DOM rendering (`renderCart`, `renderFavorites`)  
- separation of concerns:
  - UI updates  
  - event handling  
  - data persistence  

---

## 🎯 Project Goals

This project was built to demonstrate skills in:

- advanced DOM manipulation  
- state management without frameworks  
- UI/UX design  
- responsive development  
- simulation of real e-commerce logic  

---

## 🔮 Future Improvements

- migration to **React**  
- backend integration (Node.js / Express)  
- database (MongoDB / Firebase)  
- user authentication  
- product APIs  
- real checkout system  

---

## 📂 Setup

```bash
git clone https://github.com/DavideB96/urban-wip-ecommerce.git
cd urban-wip-ecommerce
