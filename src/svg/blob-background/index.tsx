import type { SVGProps } from 'react';
import React from 'react';

const BlobBackground = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="#537188"
                d="M65.2,-39.8C74.7,-21.1,66,5.9,52,26.3C38.1,46.6,19.1,60.1,-1,60.7C-21.1,61.3,-42.2,48.9,-56.6,28.3C-71,7.7,-78.7,-21.1,-68.1,-40.3C-57.6,-59.5,-28.8,-69.2,-0.5,-68.9C27.8,-68.6,55.7,-58.4,65.2,-39.8Z"
                transform="translate(100 100)"
            />
        </svg>
    );
};

export default BlobBackground;
