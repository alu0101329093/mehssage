import { NextApiRequest, NextApiResponse } from 'next';
import { unsetAuthCookies } from 'next-firebase-auth';
import initAuth from '../../initAuth';

initAuth();

type SuccessData = {
  success: boolean;
};

type ErrorData = {
  error: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessData | ErrorData>
) => {
  try {
    await unsetAuthCookies(req, res);
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error.' });
  }

  return res.status(200).json({ success: true });
};
