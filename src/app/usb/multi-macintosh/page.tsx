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
        <div className="header-section">
          <div className="logo">
            <h1>Multi Macintosh</h1>
          </div>
          <div className="subtitle">
            <h2>多版本 MacOS 系统安装 U 盘</h2>
            <p className="disclaimer">本盘使用原版镜像制作，与苹果公司无关</p>
          </div>
          <div className="capacity">128GB</div>
        </div>

        <div className="main-content">
          <section className="system-list">
            <h3>本盘共包含 8 个系统安装镜像：</h3>
            <div className="systems-grid">
              <div className="system-item">
                <div className="system-icon">🌄</div>
                <div className="system-info">
                  <div className="system-name">macOS Sequoia</div>
                  <div className="system-year">2024</div>
                  <div className="system-version">15.6</div>
                </div>
              </div>
              <div className="system-item">
                <div className="system-icon">🌉</div>
                <div className="system-info">
                  <div className="system-name">macOS Sonoma</div>
                  <div className="system-year">2023</div>
                  <div className="system-version">14.7</div>
                </div>
              </div>
              <div className="system-item">
                <div className="system-icon">🏝️</div>
                <div className="system-info">
                  <div className="system-name">macOS Ventura</div>
                  <div className="system-year">2022</div>
                  <div className="system-version">13.7.6</div>
                </div>
              </div>
              <div className="system-item">
                <div className="system-icon">🏔️</div>
                <div className="system-info">
                  <div className="system-name">macOS Monterey</div>
                  <div className="system-year">2021</div>
                  <div className="system-version">12.7.5</div>
                </div>
              </div>
              <div className="system-item">
                <div className="system-icon">🌅</div>
                <div className="system-info">
                  <div className="system-name">macOS Big Sur</div>
                  <div className="system-year">2020</div>
                  <div className="system-version">11.7.10</div>
                </div>
              </div>
              <div className="system-item">
                <div className="system-icon">🌊</div>
                <div className="system-info">
                  <div className="system-name">macOS Catalina</div>
                  <div className="system-year">2019</div>
                  <div className="system-version">10.15.7</div>
                </div>
              </div>
              <div className="system-item">
                <div className="system-icon">🏜️</div>
                <div className="system-info">
                  <div className="system-name">macOS Mojave</div>
                  <div className="system-year">2018</div>
                  <div className="system-version">10.14.6</div>
                </div>
              </div>
              <div className="system-item">
                <div className="system-icon">🏔️</div>
                <div className="system-info">
                  <div className="system-name">macOS High Sierra</div>
                  <div className="system-year">2017</div>
                  <div className="system-version">10.13.6</div>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-section">
            <h3>常见问题：</h3>
            <div className="faq-item">
              <div className="faq-question">
                底版本 MacOS 安装如果提示&quot;应用程序副本已损坏&quot;的解决方法：
              </div>
              <div className="faq-solution">
                <p>在安装界面依次点击：</p>
                <div className="menu-path">
                  <span className="menu-item">菜单栏</span>
                  <span className="arrow">›</span>
                  <span className="menu-item">实用工具</span>
                  <span className="arrow">›</span>
                  <span className="menu-item">打开终端</span>
                </div>
                <p>然后在终端中输入指令：</p>
                <div className="terminal-command">date 032208102015.20</div>
                <p>按回车后，退出终端，继续安装即可。</p>
              </div>
            </div>
          </section>
        </div>



        <div className="footer">
          <p className="brand">OSNEO99</p>
          <p className="slogan">好用的操作系统安装 U 盘</p>
        </div>
      </div>
      <ItemFooter text="本产品使用原版镜像制作，与苹果公司无关" />
    </div>
  );
}
