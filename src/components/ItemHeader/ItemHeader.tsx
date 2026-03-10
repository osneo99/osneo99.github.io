'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@apron-design/react';
import './ItemHeader.scss';

interface ItemHeaderProps {
  itemName?: string | React.ReactNode;
}

const ItemHeader: React.FC<ItemHeaderProps> = ({ itemName }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show header when scrolling up, hide when scrolling down
          if (currentScrollY < lastScrollY || currentScrollY === 0) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
   return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`item-header ${isVisible ? 'item-header--visible' : 'item-header--hidden'}`}>
      <div className="item-header__container">
        <div className="item-header__name">
          {itemName || 'Item Name'}
        </div>
        <div className="item-header__action">
          <Button variant="primary" size="sm">
            购买
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemHeader;
