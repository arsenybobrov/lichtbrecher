const getDevice = (breakpoint: string, deviceName: string) => {
  if (deviceName === 'smartphone' && (breakpoint === 'sm' || breakpoint === 'xs')) return true;
  if (deviceName === 'tablet' && breakpoint === 'md') return true;
  if (
    deviceName === 'desktop' &&
    (breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === 'xxl' || breakpoint === 'xxxl')
  )
    return true;
  return false;
};

export default getDevice;
