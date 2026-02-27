import express from 'express';
import cors from 'cors';
import NodeCache from 'node-cache';
import { fetchLeetCode, fetchCodeforces, fetchCodeChef, fetchGitHub } from './services.js';

console.log('Starting server initialization...');
const app = express();
const cache = new NodeCache({ stdTTL: 86400 }); // Cache for 24 hours

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/coding-profiles', async (req, res) => {
  console.log('Received request for coding profiles...');
  const cachedData = cache.get('coding-profiles');
  if (cachedData) {
    return res.json(cachedData);
  }

  const username = 'ruthvik0811';
  const githubUsername = 'RUTHVIKMATURU';

  try {
    const [leetcode, codeforces, codechef, github] = await Promise.all([
      fetchLeetCode(username),
      fetchCodeforces(username),
      fetchCodeChef(username),
      fetchGitHub(githubUsername)
    ]);

    const data = {
      leetcode,
      codeforces,
      codechef,
      github,
      lastUpdated: new Date().toISOString()
    };

    cache.set('coding-profiles', data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coding profile data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
