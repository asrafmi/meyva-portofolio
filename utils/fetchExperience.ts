import { client } from '@/sanity';
import { Experience } from '@/typings';
import { groq } from 'next-sanity';

export const fetchExperiences = async () => {
  const query = groq`
*[_type == 'experience'] {
  ...,
  technologies[]->
}`;
  const res = await client.fetch(query);

  const experiences: Experience[] = res;

  return experiences;
};
