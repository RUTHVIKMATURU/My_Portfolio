import { fetchLeetCode, fetchCodeforces, fetchCodeChef } from './services.js';

const test = async () => {
  console.log('Testing LeetCode...');
  const lc = await fetchLeetCode('ruthvik0811');
  console.log('LC:', lc);

  console.log('Testing Codeforces...');
  const cf = await fetchCodeforces('ruthvik0811');
  console.log('CF:', cf);

  console.log('Testing CodeChef...');
  const cc = await fetchCodeChef('ruthvik0811');
  console.log('CC:', cc);
};

test();
