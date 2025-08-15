# Images Directory

This directory is for storing all project images and assets.

## Structure
```
src/assets/images/
├── README.md           # This file
├── profile/            # Profile and personal images
├── projects/           # Project screenshots and images
├── icons/              # Custom icons and logos
└── backgrounds/        # Background images and textures
```

## Usage
- Import images in your components using relative paths
- Example: `import profileImage from '../assets/images/profile/avatar.jpg'`
- Use descriptive filenames for easy identification
- Optimize images for web (compress, appropriate formats)

## Supported Formats
- **WebP** (recommended for modern browsers)
- **PNG** (for images requiring transparency)
- **JPG/JPEG** (for photographs)
- **SVG** (for icons and scalable graphics)

## Image Optimization
- Use appropriate image sizes for different screen resolutions
- Implement lazy loading for better performance
- Consider using next-gen formats like WebP with fallbacks
- Compress images without losing quality
