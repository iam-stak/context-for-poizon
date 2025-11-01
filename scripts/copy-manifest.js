import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');
const manifestSource = resolve(projectRoot, 'manifest.json');
const distDir = resolve(projectRoot, 'dist');
const manifestDest = resolve(distDir, 'manifest.json');

await mkdir(distDir, { recursive: true });
await copyFile(manifestSource, manifestDest);
