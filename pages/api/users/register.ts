import { NextApiResponse, NextApiRequest } from 'next-server/dist/lib/utils';

import admin from 'firebase-auth/firebaseServer';

export default (req: NextApiRequest, res: NextApiResponse) => {
  admin
    .auth()
    .createUser({ email: req.body.email, password: req.body.password })
    .then(userRecord => {
      res.status(200);
      res.send(`'Successfully created new user: ${userRecord.uid}`);
    })
    .catch(error => {
      res.status(404);
      res.send(`Error creating new user: ${error}`);
    });
};
