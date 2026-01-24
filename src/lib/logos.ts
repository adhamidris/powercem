import fs from 'node:fs';
import path from 'node:path';

const LOGOS_DIR = path.join(process.cwd(), 'public', 'logos');
const LOGO_EXTENSIONS = new Set(['.svg', '.png', '.jpg', '.jpeg', '.webp']);

const FALLBACK_LOGOS = [
  { name: 'Orascom Construction', src: '/logos/orascom-construction.svg' },
  { name: 'Drake & Scull', src: '/logos/drake-scull.svg' },
  { name: 'El-Orouba', src: '/logos/el-orouba.svg' },
  { name: 'Siemens', src: '/logos/siemens.svg' },
  { name: 'HNS Group', src: '/logos/hns-group.svg' },
  { name: 'Petrojet', src: '/logos/petrojet.svg' },
  { name: 'Alemam', src: '/logos/alemam.svg' },
];

const formatLogoName = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();

const readLogos = () => {
  try {
    const files = fs.readdirSync(LOGOS_DIR);
    const logos = files
      .filter((file) => LOGO_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => ({
        name: formatLogoName(file),
        src: `/logos/${file}`,
      }));

    return logos.length ? logos : FALLBACK_LOGOS;
  } catch {
    return FALLBACK_LOGOS;
  }
};

export const logos = readLogos();
