const fs = require('fs');
const path = require('path');

function modifyFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Text colors
  content = content.replace(/\btext-slate-300\b/g, 'text-slate-600 dark:text-slate-300');
  content = content.replace(/\btext-slate-400\b/g, 'text-slate-500 dark:text-slate-400');
  content = content.replace(/\btext-slate-50\b/g, 'text-slate-800 dark:text-slate-50');
  
  // Replace hover:text-white FIRST so it doesn't get messed up by text-white
  content = content.replace(/\bhover:text-white\b/g, 'hover:text-slate-900 dark:hover:text-white');
  
  // Replace text-white globally
  content = content.replace(/\btext-white\b/g, 'text-slate-900 dark:text-white');
  
  // Fix specific buttons that should remain white text
  content = content.replace(/bg-blue-600 hover:bg-blue-700 text-slate-900 dark:text-white/g, 'bg-blue-600 hover:bg-blue-700 text-white');
  content = content.replace(/bg-blue-600 text-slate-900 dark:text-white/g, 'bg-blue-600 text-white');
  
  // Backgrounds
  content = content.replace(/\bbg-slate-950\/50\b/g, 'bg-white/50 dark:bg-slate-950/50');
  content = content.replace(/\bbg-slate-950\/80\b/g, 'bg-white/80 dark:bg-slate-950/80');
  content = content.replace(/\bbg-slate-950\/90\b/g, 'bg-white/90 dark:bg-slate-950/90');
  content = content.replace(/\bbg-slate-950\b/g, 'bg-slate-50 dark:bg-slate-950');
  
  content = content.replace(/\bbg-slate-900\/50\b/g, 'bg-slate-100/50 dark:bg-slate-900/50');
  content = content.replace(/\bbg-slate-900\b/g, 'bg-slate-100 dark:bg-slate-900');
  
  content = content.replace(/\bbg-slate-800\b/g, 'bg-slate-200 dark:bg-slate-800');

  // Borders
  content = content.replace(/\bborder-white\/5\b/g, 'border-slate-200 dark:border-white/5');
  content = content.replace(/\bborder-white\/10\b/g, 'border-slate-300 dark:border-white/10');
  
  // Other specifics
  content = content.replace(/\bbg-white\/5\b/g, 'bg-slate-200/50 dark:bg-white/5');
  content = content.replace(/\bbg-white\/10\b/g, 'bg-slate-200 dark:bg-white/10');
  content = content.replace(/\bbg-white\/20\b/g, 'bg-slate-300 dark:bg-white/20');
  
  // Revert the glass class overrides inside utilities.css
  content = content.replace(/border-slate-300 dark:border-white\/10 text-slate-900 dark:text-white/g, 'border-white/10 text-white');

  fs.writeFileSync(filePath, content);
}

const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
files.forEach(file => modifyFile(path.join(componentsDir, file)));
modifyFile(path.join(process.cwd(), 'src', 'App.tsx'));
console.log('Modifications applied');
