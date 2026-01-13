# بسم الله الرحمن الرحيم

# Sabilul Jannah Foundation 🌙

Sabilul Jannah (The Path to Paradise) is a modern, high-performance charity website built to facilitate community support, volunteerism, and transparent giving.

## 🚀 Tech Stack

- **Frontend:** [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **Content Management:** [Sanity CMS](https://www.sanity.io/) (Headless CMS for blog and dynamic content)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas) (via API Routes for future scaling)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **Forms:** Google Forms Integration (Secure, Spam-protected data collection)

## ✨ Key Features

- **Blazing Fast Performance:** Utilizing Next.js Server Components for instant page loads.
- **Dynamic Blog:** Content managed via Sanity Studio with a beautiful "Prose" reading experience.
- **Mobile First:** Fully responsive design optimized for donors on the go.
- **Secure Architecture:** "No-backend" approach using Environment Variables to protect API keys.
- **Direct Giving:** Simplified bank transfer details with "Copy to Clipboard" functionality for easy mobile banking.

## 📁 Project Structure

```text
nextjs-sabeel101/
├── src/
│   ├── app/            # Next.js App Router (Pages & Layouts)
│   ├── components/     # Reusable UI (Navbar, Footer, etc.)
│   └── sanity/         # Sanity Client & GROQ Queries
├── public/             # Static assets (icons, images)
└── studio-sabeel101/   # Sanity CMS Configuration & Schema

```

## ⚙️ Local Setup

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/sabilul-jannah.git](https://github.com/your-username/sabilul-jannah.git)
cd nextjs-sabeel101

```


2. **Install dependencies:**
```bash
npm install

```


3. **Configure Environment Variables:**
Create a `.env.local` file in the root and add:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=projectid
NEXT_PUBLIC_SANITY_DATASET=darasetname

```


4. **Run development server:**
```bash
npm run dev

```

## 🌍 Deployment

This project is configured for **Netlify**.

* Ensure `Build Command` is set to `next build`.
* Ensure `Publish Directory` is set to `.next`.
* Add your Environment Variables in the Netlify Dashboard under **Site Settings**.

---

*Dedicated to serving the community and seeking the pleasure of the Almighty.*

```

---