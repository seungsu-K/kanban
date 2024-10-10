import '/style.css';
import '@/layout/header.js';
import '@/layout/navigation.js';
import '@/layout/nav.js';
import { getRecord } from './src/api/getRecord';

(async () => {
  const a = await getRecord('users');
  console.log(a);
})();
