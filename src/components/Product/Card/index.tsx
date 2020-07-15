import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import styles from './index.module.scss';
import { getPriceObject, getPrettyPriceFormat } from '@utils/price';
import { getProductURI } from '@utils/URIs/pages';
import { FeaturedMedia } from '@interfaces/store';
import { buildImageURI } from '@utils/URIs/image';

type Props = {
    id: number;
    title: string;
    currencyFormat: string;
    currencyId: 'BRL' | 'USD' | 'EUR';
    price: number;
    installments: number;
    featuredMedia: FeaturedMedia;
};

const ProductCard: FunctionComponent<Props> = ({
    id,
    title,
    currencyFormat,
    currencyId,
    price,
    installments,
    featuredMedia,
}) => {
    const { priceInteger, priceFraction } = getPriceObject(price);

    return (
        <article className={styles['c-product-card']}>
            <Link {...getProductURI(`${id}`, title)}>
                <a>
                    <figure className={styles['figure']}>
                        <img
                            src={buildImageURI(featuredMedia.baseURI, {
                                width: 350,
                            })}
                            alt={title}
                            className={styles['image']}
                        />
                    </figure>
                </a>
            </Link>

            <Link {...getProductURI(`${id}`, title)}>
                <a>
                    <span className={styles['title']}>{title}</span>
                </a>
            </Link>

            <div className={styles['price']}>
                <span className={styles['currency-format']}>
                    {currencyFormat}
                </span>

                <span
                    className={styles['price-integer']}
                    data-testid="price-integer"
                >
                    {priceInteger}
                </span>

                <span
                    className={styles['price-fraction']}
                    data-testid="price-fraction"
                >
                    ,{priceFraction}
                </span>
            </div>

            {installments > 1 && (
                <div
                    className={styles['installments']}
                    data-testid="installments"
                >
                    {`ou ${installments} x ${getPrettyPriceFormat(
                        price / installments,
                        currencyId
                    )}`}
                </div>
            )}
        </article>
    );
};

export default ProductCard;
