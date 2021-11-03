// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from 'next';

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {Promise<void>}
 */
export default function helloAPI(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({name: 'John Doe'});
}
