import { NextApiResponse, NextApiRequest } from 'next-server/dist/lib/utils';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', `token=''`);
  res.setHeader('Access-Control-Allow-Origin', `*`);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.json({ status: true });
};
