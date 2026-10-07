/**
 * DevTools Portal Application Logic
 * Minimalist, distraction-free developer utilities portal
 * Features: live search, category filtering, dark/light theme toggle
 */

const TOOLS = [
  {
    id: 'base64-converter',
    color: '#a855f7',
    name: 'Base64 Encoder / Decoder',
    description: 'Encode and decode text, binary files, data URIs, and ASCII strings to and from Base64 format with instant preview.',
    category: 'converters',
    categoryLabel: 'Converters',
    badge: 'Encoder',
    url: 'tools/base64.html',
    tags: ['base64', 'encode', 'decode', 'binary', 'ascii'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>`
  },
  {
    id: 'android-icon-generator',
    color: '#10b981',
    name: 'Android Icon & Splash Generator',
    description: 'Generate complete Android asset packs: adaptive launcher icons, legacy mipmaps, Play Store 512px, and customizable splash screens with background colors and branding.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'Android',
    url: 'tools/android-icon-generator.html',
    tags: ['android', 'icon', 'splash', 'splash screen', 'adaptive icon', 'mipmap', 'play store', 'mobile'],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4114 13.8566 8.081 12 8.081c-1.8566 0-3.5902.3304-5.1368.8687L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
    </svg>`
  },
  {
    id: 'ios-icon-generator',
    color: '#0284c7',
    name: 'iOS App Icon Generator',
    description: 'Generate App Store-compliant iOS icon sets for iPhone and iPad with ready-to-use Xcode Contents.json asset catalogs and background fill controls.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'iOS',
    url: 'tools/ios-icon-generator.html',
    tags: ['ios', 'icon', 'iphone', 'ipad', 'apple', 'xcode', 'contents.json', 'app store', 'mobile'],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.64-.78 1.08-1.86.96-2.94-1 .04-2.13.66-2.79 1.44-.57.67-.99 1.77-.85 2.82 1.11.09 2.11-.56 2.68-1.32"/>
    </svg>`
  },
  {
    id: 'electron-icon-generator',
    color: '#06b6d4',
    name: 'Electron & Desktop Icon Generator',
    description: 'Generate multi-resolution Windows .ico binaries, macOS Retina PNGs, and Linux desktop icons with Electron and electron-builder configs.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'Desktop',
    url: 'tools/electron-icon-generator.html',
    tags: ['electron', 'desktop', 'windows', 'ico', 'macos', 'linux', 'tauri', 'app icon'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>`
  },
  {
    id: 'favicon-generator',
    color: '#f97316',
    name: 'Web Favicon & Manifest Generator',
    description: 'Generate multi-resolution favicon.ico binaries, modern PNG favicons, Apple Touch icons, and site.webmanifest with live browser tab preview.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'Favicon',
    url: 'tools/favicon-generator.html',
    tags: ['favicon', 'ico', 'webmanifest', 'pwa', 'apple touch', 'browser', 'web'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>`
  },
  {
    id: 'slug-generator',
    color: '#eab308',
    name: 'Slug Generator',
    description: 'Convert titles, headlines, or sentences into clean, human-friendly, SEO-optimized URL slugs with custom delimiters.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'Text',
    url: 'tools/slug-generator.html',
    tags: ['slug', 'url', 'seo', 'string', 'permalink'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>`
  },
  {
    id: 'cron-job-generator',
    color: '#f59e0b',
    name: 'Cron Job Generator',
    description: 'Build, decipher, and validate standard 5-part crontab expressions with natural language descriptions and schedule previews.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'Schedule',
    url: 'tools/cron-generator.html',
    tags: ['cron', 'schedule', 'timer', 'crontab', 'devops'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>`
  },
  {
    id: 'robots-txt-generator',
    color: '#14b8a6',
    name: 'Robots.txt Generator',
    description: 'Configure web crawler access rules, user-agent directives, disallow paths, crawl-delay, and sitemap locations.',
    category: 'seo',
    categoryLabel: 'SEO & Web',
    badge: 'SEO',
    url: 'tools/robots-txt.html',
    tags: ['robots', 'txt', 'seo', 'crawler', 'disallow'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>`
  },
  {
    id: 'sitemap-xml-generator',
    color: '#0d9488',
    name: 'Sitemap.xml Generator',
    description: 'Build XML sitemaps with URL entries, change frequency, priority scores, and lastmod timestamps for search indexing.',
    category: 'seo',
    categoryLabel: 'SEO & Web',
    badge: 'SEO',
    url: 'tools/sitemap-generator.html',
    tags: ['sitemap', 'xml', 'seo', 'urls', 'indexing'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>`
  },
  {
    id: 'json-formatter',
    color: '#3b82f6',
    name: 'JSON Formatter & Validator',
    description: 'Beautify, inspect, minfy, and validate JSON payloads with syntax error detection and clean indentation.',
    category: 'formatters',
    categoryLabel: 'Formatters',
    badge: 'Format',
    url: 'tools/json-formatter.html',
    tags: ['json', 'format', 'lint', 'validate', 'minify'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>`
  },
  {
    id: 'hash-generator',
    color: '#ef4444',
    name: 'Hash & Checksum Generator',
    description: 'Compute client-side cryptographic hashes including MD5, SHA-1, SHA-256, and SHA-512 for texts and strings.',
    category: 'converters',
    categoryLabel: 'Converters',
    badge: 'Crypto',
    url: 'tools/hash-generator.html',
    tags: ['hash', 'sha256', 'md5', 'crypto', 'checksum'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>`
  },
  {
    id: 'url-encoder',
    color: '#6366f1',
    name: 'URL Encoder / Decoder',
    description: 'Safely escape and unescape query parameters, URIs, and special percent-encoded characters according to standard specifications.',
    category: 'converters',
    categoryLabel: 'Converters',
    badge: 'URI',
    url: 'tools/url-encoder.html',
    tags: ['url', 'uri', 'encode', 'decode', 'escape'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>`
  },
  {
    id: 'markdown-viewer',
    color: '#818cf8',
    name: 'Markdown Viewer & Editor',
    description: 'Live client-side Markdown editor with GitHub Flavored Markdown preview, tables, task lists, code formatting, and HTML export.',
    category: 'formatters',
    categoryLabel: 'Formatters',
    badge: 'Markdown',
    url: 'tools/markdown-viewer.html',
    tags: ['markdown', 'md', 'editor', 'preview', 'gfm', 'html', 'viewer'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>`
  },
  {
    id: 'whatsapp-link',
    color: '#25d366',
    name: 'WhatsApp Direct Link & QR',
    description: 'Generate standard WhatsApp click-to-chat links (wa.me) and scannable QR codes without saving phone numbers to contacts.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'WhatsApp',
    url: 'tools/whatsapp-link.html',
    tags: ['whatsapp', 'link', 'qr', 'chat', 'wa.me', 'direct message'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>`
  },
  {
    id: 'text-to-array',
    color: '#8b5cf6',
    name: 'Text to Array Converter',
    description: 'Convert raw text lines, CSV entries, and lists into formatted arrays for JavaScript, Python, PHP, SQL IN clauses, and JSON.',
    category: 'converters',
    categoryLabel: 'Converters',
    badge: 'Array',
    url: 'tools/text-to-array.html',
    tags: ['array', 'list', 'convert', 'javascript', 'python', 'php', 'sql', 'json'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>`
  },
  {
    id: 'word-counter',
    color: '#d97706',
    name: 'Word & Character Counter',
    description: 'Analyze text in real time: word count, character count, sentence & paragraph counts, reading time, and keyword density.',
    category: 'formatters',
    categoryLabel: 'Formatters',
    badge: 'Text',
    url: 'tools/word-counter.html',
    tags: ['word count', 'character count', 'words', 'reading time', 'text analytics', 'counter'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>`
  },
  {
    id: 'qr-generator',
    color: '#0ea5e9',
    name: 'QR Code Generator',
    description: 'Generate high-resolution custom QR codes for URLs, Wi-Fi networks, and plain text with color options and instant PNG download.',
    category: 'generators',
    categoryLabel: 'Generators',
    badge: 'QR Code',
    url: 'tools/qr-generator.html',
    tags: ['qr', 'qrcode', 'generator', 'wifi', 'url', 'barcode'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>`
  },
  {
    id: 'image-compressor',
    color: '#ec4899',
    name: 'Image Compressor',
    description: 'Shrink JPEG, PNG, and WebP images directly in your browser with quality controls, dimension scaling, and live savings preview.',
    category: 'converters',
    categoryLabel: 'Converters',
    badge: 'Image',
    url: 'tools/image-compressor.html',
    tags: ['image', 'compress', 'optimize', 'shrink', 'webp', 'jpeg', 'png', 'photo'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>`
  },
  {
    id: 'csv-editor',
    color: '#10b981',
    name: 'CSV Viewer & Editor',
    description: 'View, edit, search, and export CSV spreadsheets in your browser. Add or delete rows and columns, and export directly to JSON.',
    category: 'formatters',
    categoryLabel: 'Formatters',
    badge: 'CSV',
    url: 'tools/csv-editor.html',
    tags: ['csv', 'tsv', 'table', 'spreadsheet', 'editor', 'json', 'data'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="3" y1="15" x2="21" y2="15"></line>
      <line x1="9" y1="3" x2="9" y2="21"></line>
      <line x1="15" y1="3" x2="15" y2="21"></line>
    </svg>`
  },
  {
    id: 'image-slug-generator',
    color: '#ea580c',
    name: 'Image & File Slug Generator',
    description: 'Batch sanitize and convert image filenames or headlines into clean, SEO-optimized slugs with custom delimiters and prefixes.',
    category: 'seo',
    categoryLabel: 'SEO & Web',
    badge: 'SEO',
    url: 'tools/image-slug-generator.html',
    tags: ['slug', 'image slug', 'filename', 'batch rename', 'seo', 'sanitize'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>`
  }
];

// State Management
let currentCategory = 'all';
let searchQuery = '';
let toastTimeout = null;

// DOM Elements
const toolsGrid = document.getElementById('tools-grid');
const emptyState = document.getElementById('empty-state');
const emptyMessage = document.getElementById('empty-message');
const searchInput = document.getElementById('tool-search');
const searchClearBtn = document.getElementById('search-clear');
const resetFilterBtn = document.getElementById('reset-filter-btn');
const resultsStats = document.getElementById('results-stats');
const filterPills = document.querySelectorAll('.filter-pill');
const themeToggle = document.getElementById('theme-toggle');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toast-title');
const toastMessage = document.getElementById('toast-message');
const toastClose = document.getElementById('toast-close');

// Initialize Application
function init() {
  if (!window.DevToolsComponents) {
    initTheme();
  }
  updateCategoryCounts();
  renderTools();
  attachEventListeners();
}

// Theme handling (dark mode default)
function initTheme() {
  const savedTheme = localStorage.getItem('devtools_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('devtools_theme', newTheme);
}

// Update count numbers in filter tabs
function updateCategoryCounts() {
  const counts = {
    all: TOOLS.length,
    generators: TOOLS.filter(t => t.category === 'generators').length,
    converters: TOOLS.filter(t => t.category === 'converters').length,
    seo: TOOLS.filter(t => t.category === 'seo').length,
    formatters: TOOLS.filter(t => t.category === 'formatters').length
  };

  Object.keys(counts).forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = counts[cat];
  });
}

// Filter tools based on query & category
function getFilteredTools() {
  const query = searchQuery.trim().toLowerCase();

  return TOOLS.filter(tool => {
    const matchesCategory = (currentCategory === 'all') || (tool.category === currentCategory);

    if (!matchesCategory) return false;
    if (!query) return true;

    const matchesName = tool.name.toLowerCase().includes(query);
    const matchesDesc = tool.description.toLowerCase().includes(query);
    const matchesTags = tool.tags.some(t => t.toLowerCase().includes(query));

    return matchesName || matchesDesc || matchesTags;
  });
}

// Convert hex color to rgba string
function hexToRgba(hex, alpha) {
  if (!hex) return `rgba(99, 102, 241, ${alpha})`;
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

// Render cards into grid
function renderTools() {
  const filtered = getFilteredTools();

  resultsStats.textContent = `Showing ${filtered.length} of ${TOOLS.length} tools`;

  if (filtered.length === 0) {
    toolsGrid.innerHTML = '';
    emptyState.style.display = 'block';
    if (searchQuery) {
      emptyMessage.textContent = `No utilities matched "${searchQuery}". Try a different keyword or reset filters.`;
    } else {
      emptyMessage.textContent = `No utilities currently found in the selected category.`;
    }
    return;
  }

  emptyState.style.display = 'none';

  toolsGrid.innerHTML = filtered.map(tool => `
    <a href="${tool.url}" class="tool-list-link" data-id="${tool.id}" aria-label="${escapeHtml(tool.name)}">
      ${escapeHtml(tool.name)}
    </a>
  `).join('');
}

// Feedback toast
function showToast(title, message) {
  if (toastTimeout) clearTimeout(toastTimeout);

  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toast.classList.add('show');

  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Event Listeners setup
function attachEventListeners() {
  if (!window.DevToolsComponents && themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClearBtn.style.display = searchQuery ? 'flex' : 'none';
    renderTools();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    searchInput.focus();
    renderTools();
  });

  resetFilterBtn.addEventListener('click', () => {
    searchQuery = '';
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    currentCategory = 'all';

    filterPills.forEach(pill => {
      const isAll = pill.dataset.category === 'all';
      pill.classList.toggle('active', isAll);
      pill.setAttribute('aria-selected', isAll);
    });

    renderTools();
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });

      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      currentCategory = pill.dataset.category;
      renderTools();
    });
  });

  toolsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.tool-card');
    if (!card) return;
    handleCardSelect(card.dataset.id);
  });

  toolsGrid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.tool-card');
      if (card) {
        e.preventDefault();
        handleCardSelect(card.dataset.id);
      }
    }
  });

  // Back to top button
  if (!window.DevToolsComponents) {
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Footer tool navigation links
  document.querySelectorAll('[data-footer-tool]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const toolId = link.getAttribute('data-footer-tool');
      
      // Reset search if query is hiding this tool
      if (searchQuery) {
        searchQuery = '';
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
      }

      // Ensure category matches or reset to 'all'
      const tool = TOOLS.find(t => t.id === toolId);
      if (tool && currentCategory !== 'all' && tool.category !== currentCategory) {
        currentCategory = 'all';
        filterPills.forEach(p => {
          const isAll = p.dataset.category === 'all';
          p.classList.toggle('active', isAll);
          p.setAttribute('aria-selected', isAll);
        });
      }

      renderTools();

      // Scroll to card and focus
      setTimeout(() => {
        const card = document.querySelector(`.tool-card[data-id="${toolId}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.focus();
        }
        handleCardSelect(toolId);
      }, 50);
    });
  });

  // Global Shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      if (searchInput.value) {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.style.display = 'none';
        renderTools();
      }
      searchInput.blur();
    }
  });
}

function handleCardSelect(toolId) {
  const tool = TOOLS.find(t => t.id === toolId);
  if (!tool) return;
  window.location.href = tool.url;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', init);
