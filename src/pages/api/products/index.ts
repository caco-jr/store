import { NextApiRequest, NextApiResponse } from 'next';
import { storeData } from 'src/__mocks__/api/data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(storeData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
