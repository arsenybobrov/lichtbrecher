export type ShareChannelType =
  | 'LINKEDIN'
  | 'XING'
  | 'TWITTER'
  | 'FACEBOOK'
  | 'WHATSAPP'
  | 'MAIL';

const shareUrl = (channel: ShareChannelType, url: string) => {
  const width = '350px';
  const height = width;
  switch (channel) {
    case 'LINKEDIN':
      window.open(
        `http://www.linkedin.com/shareArticle?mini=true&url=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`
      );
      break;
    case 'XING':
      window.open(
        `https://www.xing.com/spi/shares/new?url=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`
      );
      break;
    case 'TWITTER':
      window.open(
        `http://twitter.com/share?url=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`
      );
      break;
    case 'FACEBOOK':
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`
      );
      break;
    case 'WHATSAPP':
      window.open(
        `https://api.whatsapp.com/send?text=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`
      );
      break;
    case 'MAIL':
      window.location.href = `mailto:?body=${url}`;
      break;
    default:
      break;
  }
};

export default shareUrl;
