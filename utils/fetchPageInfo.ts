import { client } from '@/sanity';
import { PageInfo } from '@/typings';
import { groq } from 'next-sanity';

export const fetchPageInfo = async () => {
  const query = groq`
*[_type == 'pageInfo'][0]`;
  const res = await client.fetch(query);

  const pageInfo: PageInfo = res;

  return pageInfo;
};
