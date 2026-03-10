'use client';

import React from 'react';
import { Button } from '@apron-design/react';
import './ItemFooter.scss';

interface ItemFooterProps {
 text?: string;
}

const ItemFooter: React.FC<ItemFooterProps> = ({ text }) => {
 return (
   <div className="item-footer">
     <div className="item-footer__container">
       <div className="item-footer__copyright">
         &copy; osneo99.com All rights reserved
       </div>
       <div className="item-footer__text">
         {text || 'text here'}
       </div>
     </div>
   </div>
 );
};

export default ItemFooter;
