import uniq from 'lodash/uniq';

const blacklistAttrsInTags = [
  'onclick',
  'onmouseenter',
  'onmouseleave',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onscroll',
  'class',
];

const whitelistTags = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ul',
  'ol',
  'li',
  'br',
  'p',
  'a',
  'strong',
  'small',
  'span',
  'em',
  'b',
  'i',
  's',
];

const extractTag = (tag: string): string => tag.replace(/[</>]/gi, '');

const createAttributesRegex = (attributesBlacklist: Array<string>): string => attributesBlacklist
  .map(
    (attr) => `\\s*?${attr}\\s*?=\\s*?"(?:.*?)"|\\s*?${attr}\\s*?=\\s*?'(?:.*?)'`
  )
  .join('|');

const createOpenClosedTagsRegex = (tagsList: Array<string>): string => tagsList
  .map(
    (tag) => `\\/?<${extractTag(tag)}\\b[^>]*>(.*?)<\\/?${extractTag(tag)}(.*?)>`
  )
  .join('|');

const createSingleTagRegex = (tagsList: Array<string>): string => tagsList.map((tag) => `<(.*?)${extractTag(tag)}\\s*?(.*?)\\s*?>`).join('|');

const preventCodeInjection = (str: string): string => {
  let filteredString;
  const extractedTags = uniq(str.match(/<([^\s>]+)(|>)+/gi) || []);

  const notWhitelistedTags = uniq(
    extractedTags.filter((tag) => {
      const tagName = tag.replace(/[^\w\s]/gi, '');
      return whitelistTags.indexOf(tagName) === -1;
    })
  );

  // remove blacklisted Attributes
  const blacklistAttrsRegex = new RegExp(
    createAttributesRegex(blacklistAttrsInTags),
    'gi'
  );

  const strippedTags = str.replace(blacklistAttrsRegex, '');

  if (notWhitelistedTags.length) {
    // remove not whitelisted single Tags
    const singleTagsRegex = new RegExp(
      createSingleTagRegex(notWhitelistedTags),
      'gi'
    );
    // remove not whitelisted open&closed Tags
    const doubleTagsRegex = new RegExp(
      createOpenClosedTagsRegex(notWhitelistedTags),
      'gi'
    );
    filteredString = strippedTags
      .replace(doubleTagsRegex, '')
      .replace(singleTagsRegex, '');
  } else {
    filteredString = strippedTags;
  }

  return filteredString;
};

export default preventCodeInjection;
