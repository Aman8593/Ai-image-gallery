export default function handler(req, res) {
    const { width, height } = req.query;
  
    const placeholderImage = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ccc" />
        <text x="50%" y="50%" fill="#333" font-size="20" font-family="Arial" dy=".3em" text-anchor="middle">
          ${width}x${height}
        </text>
      </svg>
    `;
  
    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(placeholderImage);
  }
  