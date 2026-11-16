// Base-aware URL for files in public/ (the demo is also published under a sub-path).
const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

export const img = (file: string): string => `${base}images/${file}`;
