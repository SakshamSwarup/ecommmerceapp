const fs = require('fs');
const path = require('path');

const files = [
  'routes-manifest.json',
  'build-manifest.json',
  'prerender-manifest.json',
  'server/pages-manifest.json',
];

for (const file of files) {
  const src = path.join('.next', file);
  const dest = path.join('.next', 'standalone', '.next', file);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
  }
}
