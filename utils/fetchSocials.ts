import { client } from '@/sanity';
import { Social } from '@/typings';
import { groq } from 'next-sanity';

export const fetchSocials = async () => {
  const query = groq`
*[_type == 'social']`;
  const res = await client.fetch(query);

  const socials: Social[] = res;

  return socials;
};
