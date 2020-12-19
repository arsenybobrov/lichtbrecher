import checkLinkActiveState from '../checkLinkActiveState';

const linkMock = {
  id: "X6E0uxAAACAAqJny",
  isBroken: false,
  lang: "de-de",
  link_type: "Document",
  slug: "irgendeine-unterseite",
  tags: [],
  type: "page",
  uid: "unterseite",
};

describe('checkLinkActiveState', () => {
  it.each`
    name                    | url                                   | link        | expected
    ${'link is active'}     | ${'http://localhost:3000/unterseite'} | ${linkMock} | ${true}
    ${'link is not active'} | ${'http://localhost:3000'}            | ${linkMock} | ${false}
    ${'link is not active'} | ${'http://localhost:3000/test'}       | ${linkMock} | ${false}
    ${'link is not active'} | ${'http://localhost:3000/en/test'}    | ${linkMock} | ${false}
  `('$name', ({ url, link, expected }) => {
    expect(checkLinkActiveState(url, link)).toStrictEqual(expected);
  });
});
