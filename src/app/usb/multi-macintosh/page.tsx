import './page.scss';
import ItemHeader from '@/components/ItemHeader';
import ItemFooter from '@/components/ItemFooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '多版本 MacOS 系统安装 U 盘',
};

export default function UsbMultiMacintosh() {
 return (
   <div className="usb-macintosh-container">
     <ItemHeader itemName="多版本 MacOS 系统安装 U 盘" />
     <div className="content">
       <h1>多版本 MacOS 系统安装 U 盘</h1>
       <p>正在开发</p>
       <p>这里会做一个这个多版本集合安装 u 盘的介绍和购买联系方式</p>
     </div>
     <div style={{ height: 5000 }} />
     <ItemFooter text="本产品使用原版镜像制作，与苹果公司无关" />
   </div>
  );
}
