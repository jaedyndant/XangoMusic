# Images Folder Structure

Add your images to the appropriate folders:

## 📁 Folder Organization

- **`albums/`** - Album cover artwork (e.g., `tinariwen-amatssou.jpg`)
- **`artists/`** - Artist photos and portraits
- **`news/`** - Images for news articles and reviews

## 📝 Naming Convention

Use lowercase with hyphens for consistency:
- `artist-album.jpg` (e.g., `fatoumata-diawara-fenfo.jpg`)
- `artist-name.jpg` (e.g., `bombino-portrait.jpg`)
- `news-article-title.jpg` (e.g., `desert-blues-feature.jpg`)

## 🖼️ Image Requirements

- **Format**: JPG or PNG
- **Album covers**: Square aspect ratio (1:1) recommended
- **News images**: 16:9 aspect ratio recommended
- **File size**: Keep under 500KB for web optimization

## 🔗 Usage in Code

Reference images using `/images/folder/filename.jpg`:
```tsx
<Image src="/images/albums/tinariwen-amatssou.jpg" alt="Album cover" />
```