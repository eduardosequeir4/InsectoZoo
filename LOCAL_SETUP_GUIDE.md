# Cappas Insectozoo - Local Setup Guide

## 📦 What You Need to Download

To run this website locally, you need these folders/files:

### Frontend (React):
- `/app/frontend/` - entire folder
  - `src/` - source code
  - `public/` - public assets
  - `package.json` - dependencies
  - `tailwind.config.js` - styling config
  - `craco.config.js` - build config

### Backend (FastAPI - Optional):
- `/app/backend/` - entire folder
  - `server.py` - main server file
  - `requirements.txt` - Python dependencies
  - `.env` - environment variables

## 🚀 Local Setup Instructions

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Yarn** package manager - Install with: `npm install -g yarn`
- **Python 3.8+** (only if running backend) - [Download here](https://www.python.org/)

### Frontend Only Setup (Recommended for Testing)

1. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   ```

4. **Open in browser**
   - The site will automatically open at `http://localhost:3000`
   - All features work except form submissions (frontend-only with mock data)

### Full Stack Setup (Frontend + Backend)

#### Backend Setup:

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   - Edit `.env` file and add:
   ```
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=insectozoo
   ```

5. **Run the backend server**
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```

#### Frontend Setup:

1. **In a new terminal, navigate to frontend folder**
   ```bash
   cd frontend
   ```

2. **Update backend URL in `.env`**
   ```
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

3. **Install and run**
   ```bash
   yarn install
   yarn start
   ```

## 📁 File Structure

```
cappas-insectozoo/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Contacts.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── .env
└── backend/
    ├── server.py
    ├── requirements.txt
    └── .env
```

## 🎨 Current Features

- ✅ Responsive design (mobile + desktop)
- ✅ Saffron/orange color theme
- ✅ 4 pages: Home, About, Gallery, Contacts
- ✅ Image gallery with filters
- ✅ Contact form (mock data)
- ✅ Smooth animations and transitions

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules
rm yarn.lock
yarn install
```

### Build for Production
```bash
cd frontend
yarn build
# Output will be in frontend/build/ folder
```

## 📝 Notes

- The website currently uses mock data for the reservation form
- All images are loaded from external URLs (Unsplash)
- No backend/database required for basic functionality
- For production deployment, you'll need to set up proper backend and database

## 🆘 Need Help?

- Check if all dependencies are installed correctly
- Ensure you're using the correct Node.js version (v16+)
- Make sure ports 3000 (frontend) and 8001 (backend) are available
- Review browser console for any errors
