import getDevice from '../getDevice';

describe('getDevice', () => {
  it.each`
    device          | breakpoint | expected
    ${'smartphone'} | ${'xs'}    | ${true}
    ${'smartphone'} | ${'sm'}    | ${true}
    ${'smartphone'} | ${'xl'}    | ${false}
    ${'tablet'}     | ${'xl'}    | ${false}
    ${'tablet'}     | ${'sm'}    | ${false}
    ${'tablet'}     | ${'md'}    | ${true}
    ${'desktop'}    | ${'xl'}    | ${true}
    ${'desktop'}    | ${'sm'}    | ${false}
    ${'desktop'}    | ${'md'}    | ${false}
    ${'desktop'}    | ${'xxl'}   | ${true}
    ${'desktop'}    | ${'lg'}    | ${true}
  `('$device should return $expected at $breakpoint', ({ device, breakpoint, expected }) => {
    expect(getDevice(breakpoint, device)).toStrictEqual(expected);
  });
});
