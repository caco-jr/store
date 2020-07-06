import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={306} height={306} viewBox="0 0 306 306" {...props}>
      <path d="M247.35 35.7L211.65 0l-153 153 153 153 35.7-35.7L130.05 153z" />
    </svg>
  );
}

const BackIcon = React.memo(SvgComponent);
export default BackIcon;
