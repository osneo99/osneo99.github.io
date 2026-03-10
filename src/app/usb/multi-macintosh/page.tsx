import './page.scss';
import ItemHeader from '@/components/ItemHeader';

export default function UsbMultiMacintosh() {
 return (
    <div className="usb-macintosh-container">
      <ItemHeader itemName="MacOS U盘" />
      <div className="content">
        <h1>MacOS 多版本集合</h1>
        <p>正在开发</p>
        <p>这里会做一个这个多版本集合安装 u 盘的介绍和购买联系方式</p>
      </div>
      <div style={{ height: 5000 }} />
    </div>
  );
}
