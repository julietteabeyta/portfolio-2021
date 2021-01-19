const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN;

const client = require('contentful').createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const type = 'lessonImage';

export async function getcontent () {
    const entries = await client.getEntries({
      content_type: type,
      include: 3,
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
}

export default { getcontent }