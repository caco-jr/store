import React, { FunctionComponent } from 'react';

type Props = {
  title: string;
  currencyFormat: string;
};

const ProductCard: FunctionComponent<Props> = ({ title, currencyFormat }) => {
  const componentClassName = 'c-card';

  return (
    <article className={componentClassName}>
      <span className={`${componentClassName}__title`}>{title}</span>

      <div className={`${componentClassName}__price`}>
        <span className={`${componentClassName}__currency-format`}>
          {currencyFormat}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
