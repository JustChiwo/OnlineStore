# Online Store

A front-end e-commerce website built as a group capstone project for **Melsoft Academy**. The site recreates the provided Figma design (*E-Commerce Store — Melsoft Academy*) and supports a full shopping flow: **browse → view product → add to bag → checkout**.

There is no backend. All product data lives in the code and all state is handled in the browser.

---

## Tech stack

| Tool | What we use it for |
|---|---|
| **React 19** | Components and hooks |
| **Vite 8** | Dev server and build tool |
| **Tailwind CSS 4** | Styling, matched to the Figma design (plus some per-component CSS files) |
| **React Router (react-router-dom 7)** | Page navigation |
| **Redux Toolkit + react-redux** | Global state for the bag (cart) |
| **ESLint + Prettier** | Code quality and consistent formatting |

---

## Getting started

### Prerequisites
- **Node.js 20.19 or newer** (or 22.12+). Vite 8 will not run on older versions. Check yours with `node -v`.
- **Git**

### Run it locally

```bash
# 1. Clone the repo
git clone <repo-url>   <!-- CONFIRM: paste the GitHub repo URL -->
cd OnlineStore

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the local address printed in the terminal (usually `http://localhost:5173`).

### Other scripts

| Command | What it does |
|---|---|
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks the code with ESLint |
| `npx prettier . --write` | Formats the whole project |

---

## Pages and routes

| Route | Page |
|---|---|
| `/` | Home: landing page with featured and popular products |
| `/products` | All products: product grid, sidebar, search, bag panel |
| `/product/:id` | Item view: product details and add to bag |
| `/cart` | Bag page: items, quantities, total |
| `/checkout` | Checkout: forms and order summary |
| `/order-success` | Order confirmation |

---

## Project structure

```
public/
  images/            Product photos
  Logo.svg
src/
  assets/            SVG icons and logo
  components/        BagSection, SearchBar, SideBar (and Bag.css)
  data/
    products.js      The product catalogue (22 products)
  pages/             Home (landing page), ProductPage (all products),
                     ItemOverviewPage (single item), CartPage,
                     CheckoutPage, OrderSuccessPage (plus their CSS files)
  store/             store.js and cartSlice.js (Redux)
  App.jsx            Route list
  main.jsx           App entry: Router and Redux Provider
```
<!-- CONFIRM: delete the empty folders src/app and src/slices if nothing is in them -->

Naming rule: **a component's name matches its file name** (for example, `CartPage.jsx` contains `CartPage`).

---

## Product data

Products live in `src/data/products.js`. Every product has the same fields:

| Field | Example | Notes |
|---|---|---|
| `id` | `"3"` | Text, unique. Used in the URL (`/product/3`) |
| `image` | `"/images/iphone-11-black.jpg"` | Path inside `public/images` |
| `name` | `"Iphone 11"` | |
| `subtitle` | `"Serious Black"` | Short line shown on cards |
| `color` | `"Serious Black"` | Shown in the bag |
| `price` | `619.99` | Number |
| `rating` | `4.5` | Number |
| `description` | Two short paragraphs | Shown on the item view page |

---

## State management

- **Redux Toolkit** holds the bag (cart) in one store (`src/store`), so the catalog, item view and bag page all see the same items.
- **Local component state** (`useState`) handles small UI things such as the search text.


---

## Project status

<!-- CONFIRM: tick or untick each item before submitting -->
- [x] Project setup (Vite, Tailwind, Router, Redux Toolkit, Prettier)
- [x] Routing for all five pages
- [x] Product data and images
- [x] Sidebar and search bar
- [x] Item view page
- [x] Bag side panel
- [x] Bag page (change quantity, remove, clear)
- [x] Home page
- [ ] Checkout forms and validation
- [ ] Order success page
- [ ] Bag saved in localStorage
- [x] Responsive layout check

---

## Team

| Name | Responsibility |
|---|---|
| **Chiwo** | Repository setup, routing, shared UI components (sidebar, search), product data |
| **Yolanda** | Bag / cart (Redux) |
| **Tshehla** | Item view page |
| **Bonolo** | Checkout forms |

### How we work
- Pull the latest `main` before you start work.
- Prettier is set up in the repo. Install the **Prettier extension** in VS Code and turn on **format on save**.
