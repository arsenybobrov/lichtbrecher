import { colsAmount, containerOffsetLeftMd, containerOffsetLeftXxl } from '../components/layout/Grid/Container';

const fitMeInsideContainer = (md: number, xxl: number) => {
  return {
    md: (colsAmount - md - containerOffsetLeftMd) / colsAmount,
    xxl: (colsAmount - xxl - containerOffsetLeftXxl) / colsAmount,
  };
};

export default fitMeInsideContainer;
