// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityCli from '@/meyva-portofolio/sanity.cli';
import { client } from '@/sanity';
import { Project } from '@/typings';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

const query = groq`
*[_type == 'project'] {
  ...,
  technologies[]->
}`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await client.fetch(query);

  res.status(200).json({ projects });
}
