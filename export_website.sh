#!/bin/bash

echo "🎨 Exporting Cappas Insectozoo Website..."
echo "=========================================="

# Create export directory
EXPORT_DIR="/tmp/cappas_insectozoo_export"
rm -rf $EXPORT_DIR
mkdir -p $EXPORT_DIR

# Copy frontend
echo "📦 Copying frontend files..."
cp -r /app/frontend $EXPORT_DIR/
cd $EXPORT_DIR/frontend

# Clean up unnecessary files
rm -rf node_modules
rm -rf build
rm -rf .cache

# Copy backend
echo "📦 Copying backend files..."
cp -r /app/backend $EXPORT_DIR/

# Copy setup guide
cp /app/LOCAL_SETUP_GUIDE.md $EXPORT_DIR/

# Create a README
cat > $EXPORT_DIR/README.md << 'READMEEOF'
# Cappas Insectozoo Website

A beautiful, responsive website for an insect museum featuring live colonies of ants, bees, wasps, and termites.

## 🚀 Quick Start

1. Read the `LOCAL_SETUP_GUIDE.md` for detailed instructions
2. Navigate to `frontend/` folder
3. Run `yarn install`
4. Run `yarn start`
5. Open http://localhost:3000

## 🎨 Features

- Responsive design with saffron/orange color theme
- Home, About, Gallery, and Contacts pages
- Interactive image gallery with filters
- Contact/reservation form
- Smooth animations and transitions

## 📚 Tech Stack

- **Frontend**: React, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, MongoDB (optional)
- **Icons**: Lucide React

---

Built with ❤️ for Cappas Insectozoo
READMEEOF

# Create archive
echo "📦 Creating archive..."
cd /tmp
tar -czf cappas_insectozoo_website.tar.gz cappas_insectozoo_export/

echo ""
echo "✅ Export complete!"
echo "=========================================="
echo "📁 Export location: /tmp/cappas_insectozoo_website.tar.gz"
echo "📁 Extracted files: /tmp/cappas_insectozoo_export/"
echo ""
echo "To download:"
echo "1. The archive is ready at: /tmp/cappas_insectozoo_website.tar.gz"
echo "2. Extract it on your local machine"
echo "3. Follow instructions in LOCAL_SETUP_GUIDE.md"
echo ""
echo "Archive size:"
du -h /tmp/cappas_insectozoo_website.tar.gz
