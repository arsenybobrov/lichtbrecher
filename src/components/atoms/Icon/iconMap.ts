import DummyIcon from './icons/DummyIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import TwitterIcon from './icons/TwitterIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import XingIcon from './icons/XingIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import DefaultChannel from './icons/DefaultChannel';
import BlogIcon from './icons/BlogIcon';
import LogoIcon from './icons/Logo';
import ArrowIconSlim from './icons/ArrowIconSlim';
import ArrowIconBold from './icons/ArrowIconBold';
import HamburgerAnimatedIcon from './icons/HamburgerAnimatedIcon';

export type IconMapType = {
  DEFAULT: React.FC;
  BLOG: React.FC;
  FACEBOOK: React.FC;
  INSTAGRAM: React.FC;
  LINKEDIN: React.FC;
  MAIL: React.FC;
  TWITTER: React.FC;
  WHATSAPP: React.FC;
  XING: React.FC;
  YOUTUBE: React.FC;
  DEFAULTCHANNEL: React.FC;
  LOGO: React.FC;
  ARROW_SLIM: React.FC;
  ARROW_BOLD: React.FC;
  HAMBURGER_ANIMATED: React.FC;
};

export const IconMap: IconMapType = {
  DEFAULT: DummyIcon,
  BLOG: BlogIcon,
  FACEBOOK: FacebookIcon,
  INSTAGRAM: InstagramIcon,
  LINKEDIN: LinkedInIcon,
  MAIL: MailIcon,
  TWITTER: TwitterIcon,
  WHATSAPP: WhatsappIcon,
  XING: XingIcon,
  YOUTUBE: YoutubeIcon,
  DEFAULTCHANNEL: DefaultChannel,
  LOGO: LogoIcon,
  ARROW_SLIM: ArrowIconSlim,
  ARROW_BOLD: ArrowIconBold,
  HAMBURGER_ANIMATED: HamburgerAnimatedIcon,
};

export type IconType = keyof IconMapType;
