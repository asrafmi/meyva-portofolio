import { client } from '@/sanity';
import { Project } from '@/typings';
import { groq } from 'next-sanity';

export const fetchProjects = async () => {
  const query = groq`
*[_type == 'project'] {
  ...,
  technologies[]->
}`;
  const res = await client.fetch(query);

  const projects: Project[] = res;

  return projects;
};
