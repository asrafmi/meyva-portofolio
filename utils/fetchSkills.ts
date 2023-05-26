import { client } from '@/sanity';
import { Skill } from '@/typings';
import { groq } from 'next-sanity';

export const fetchSkills = async () => {
  const query = groq`
*[_type == 'skill']`;
  const res = await client.fetch(query);

  const skills: Skill[] = res;

  return skills;
};
