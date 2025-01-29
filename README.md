# AI Image Gallery

## 📌 Project Overview
The **AI Image Gallery** is a web application that displays AI-generated images with metadata such as generation date, AI model used, and associated tags. The images are dynamically fetched and rendered in a structured grid layout.

## ✨ Features
- 📷 **Dynamic Image Fetching**: Fetches AI-generated images from a JSON file.
- 🎨 **Responsive Grid Layout**: Displays images in a user-friendly UI.
- 🔍 **Search & Filter**: Allows users to filter images by tags and AI model.
- ⚡ **Lazy Loading**: Optimized performance with on-demand image loading.
- 🌐 **Placeholder Image API**: Uses `/api/placeholder/{width}/{height}` for generating placeholders.
- 🖼️ **Image Modal View**: Opens a modal with a larger view of the image, displaying detailed information when clicked.
- 🔗 **ID-Based Routing**: Implements dynamic routing with image IDs, allowing users to view individual images by URL (e.g., /ImageModal/[id]).

## 🛠️ Technologies Used
- **Frontend**: NextJs, Tailwind CSS
- **Database**: JSON-based data storage
- **Deployment**: Vercel / Netlify

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/Aman8593/Ai-image-gallery.git
 cd Ai-image-gallery
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Run the Project
```sh
 npm run dev
```

### 4️⃣ Open in Browser
The application will run on `http://localhost:3000/`.

## 📁 Folder Structure
```
.
├── .next/                  # Next.js build output (Generated after build)
├── node_modules/           # Dependencies installed via npm/yarn
├── public/                 # Static assets (favicon, images, etc.)
├── src/                    # Source files
│   ├── app/                # Main application logic
│   │   ├── favicon.ico     # Favicon for the app
│   │   ├── globals.css     # Global styles
│   │   ├── layout.js       # Layout component
│   │   ├── page.js         # Main page component
│   ├── components/         # Reusable UI components
│   │   ├── Card.js         # Card component
│   ├── data/               # Data storage
│   │   ├── data.json       # JSON file containing image data
├── pages/                  # API routes and backend logic
│   ├── api/placeholder/    # API route folder
│   │   ├── [height].js     # Dynamic API route handling placeholder height
├── .gitignore              # Git ignore file
├── jsconfig.json           # JavaScript configuration for path aliases
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies & scripts
├── package-lock.json       # Lock file for package versions
├── postcss.config.mjs      # PostCSS configuration for styling
├── README.md               # Project documentation
├── tailwind.config.mjs     # Tailwind CSS configuration
```

## 🌍 Deployment Guide
### Deploy on Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` and follow setup instructions.
3. Project will be deployed at a Vercel-generated URL.

### Deploy on Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run `netlify deploy --prod`
3. Project will be hosted on Netlify.

## 📜 License
This project is licensed under the MIT License.

---
📧 **Contact:** [Aman Wadgaonkar](https://github.com/Aman8593) | Contributions are welcome! 🚀
