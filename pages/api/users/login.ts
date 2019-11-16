import { NextApiResponse, NextApiRequest } from 'next-server/dist/lib/utils';

import admin from 'firebase-auth/firebaseServer';
import { isProduction } from 'utils/env';

const ONE_DAY = 1000 * 60 * 60 * 24;

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.status(400);
    return res.send('No body provided.');
  }

  const token = req.body.token;

  admin
    .auth()
    .verifyIdToken(token)
    .then(decodedToken => {
      res.setHeader(
        'Set-Cookie',
        `user=${JSON.stringify(decodedToken)}; path=/; expires: ${new Date(
          Date.now() + ONE_DAY
        )}${isProduction() ? ' Secure' : ''}`
      );
      res.setHeader('Access-Control-Allow-Origin', `*`);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.json({ status: true, decodedToken });
    })
    .catch(error => res.json({ error }));
};
