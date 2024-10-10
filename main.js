import '/style.css';
import '@/layout/header.js';
import '@/layout/navigation.js';
import '@/layout/nav.js';
import { getRecord } from './src/api/getDocument';

(async () => {
  const a = await getRecord('projects');
  console.log(a);
})();
