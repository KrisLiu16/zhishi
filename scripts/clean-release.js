import fs from 'fs';
import path from 'path';

const target = path.join(process.cwd(), 'release');
try {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log('Cleaned release directory.');
  }
} catch (err) {
  console.warn('Failed to clean release directory:', err);
}
