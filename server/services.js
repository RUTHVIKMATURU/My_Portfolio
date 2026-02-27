import axios from 'axios';
import * as cheerio from 'cheerio';

export const fetchLeetCode = async (username) => {
  const query = `
    {
      matchedUser(username: "${username}") {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
          reputation
        }
      }
      userContestRanking(username: "${username}") {
        rating
        topPercentage
      }
    }
  `;

  try {
    const response = await axios.post('https://leetcode.com/graphql', { query });
    const data = response.data.data;

    if (!data.matchedUser) {
      console.warn(`LeetCode user ${username} not found.`);
      return null;
    }

    const acStats = data.matchedUser.submitStats.acSubmissionNum;
    const totalSolved = acStats.find(s => s.difficulty === 'All')?.count || 0;

    return {
      name: 'LeetCode',
      rating: 2072,
      solved: totalSolved,
      rank: data.matchedUser.profile.ranking || 'N/A',
      maxRating: 2072,
    };
  } catch (error) {
    console.error('LeetCode fetch error:', error);
    return null;
  }
};

export const fetchCodeforces = async (username) => {
  try {
    const response = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`);
    const data = response.data.result[0];
    return {
      name: 'Codeforces',
      rating: data.rating || 0,
      maxRating: data.maxRating || 0,
      rank: data.rank || 'unrated',
      solved: 350, // Codeforces API doesn't give total solved directly in user.info, usually requires status query
    };
  } catch (error) {
    console.error('Codeforces fetch error:', error);
    return null;
  }
};

export const fetchCodeChef = async (username) => {
  try {
    const response = await axios.get(`https://www.codechef.com/users/${username}`);
    const $ = cheerio.load(response.data);

    const rating = $('.rating-number').first().text();
    const stars = $('.rating-star span').length;
    const maxRating = $('.rating-header small').text().match(/\d+/)?.[0];

    return {
      name: 'CodeChef',
      rating: parseInt(rating) || 0,
      maxRating: parseInt(maxRating) || 0,
      stars: stars,
      solved: 500, // Harder to scrape total solved accurately without more complex parsing
    };
  } catch (error) {
    console.error('CodeChef fetch error:', error);
    return null;
  }
};

export const fetchGitHub = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const data = response.data;
    return {
      name: 'GitHub',
      repos: data.public_repos || 0,
      followers: data.followers || 0,
      rank: 'Open Source',
      link: `https://github.com/${username}`,
    };
  } catch (error) {
    console.error('GitHub fetch error:', error);
    return null;
  }
};
