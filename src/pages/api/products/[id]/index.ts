import { NextApiRequest, NextApiResponse } from 'next';

import { storeData } from '../data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { id },
    } = _req;

    const product = storeData.products.find(
      (product) => `${product.id}` === `${id}`
    );

    if (!product) {
      return res
        .status(404)
        .json({ status: 404, message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
