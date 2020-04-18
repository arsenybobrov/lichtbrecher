import preventCodeInjection from '../preventCodeInjection';

const notOnlyWhitelistedInput =
  '<script   href="https://example.com/bad,js"><button name="button">Klick mich</button></script><h1>Lorem ipsum</h1><h2 onclick ="alert(\'burn in hell\')">Lorem ipsum</h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <a href="#" class=" class" >Aenean commodo</a> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><br/><button>Click me</button><tagname></tagname><p>Lorem ipsum dolor sit amet, consectetuer class="class" adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum <strong>sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><button name="button">Klick mich</button><script>alert(\'burn in hell\')</script>';
const censoredOutput =
  '<h1>Lorem ipsum</h1><h2>Lorem ipsum</h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <a href="#" >Aenean commodo</a> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><br/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum <strong>sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>';

describe('preventCodeInjection', () => {
  it.each`
    name                                                    | str                        | expected
    ${'string is censored because of blacklisted elements'} | ${notOnlyWhitelistedInput} | ${censoredOutput}
  `('$name', ({ str, expected }) => {
  expect(preventCodeInjection(str)).toStrictEqual(expected);
});

  it.each`
    name                                           | str
    ${'opening tag'}                               | ${'<danger>'}
    ${'opening tag with whitespaces'}              | ${'<danger      >'}
    ${'opening tag with attributes'}               | ${'<danger copy-all>'}
    ${'closing tag'}                               | ${'</danger>'}
    ${'closing tag with whitespaces'}              | ${'</danger   >'}
    ${'tag with content'}                          | ${"<danger>alert('hacked');</danger>"}
    ${'tag with attributes, content'}              | ${"<danger copy-all>alert('hacked');</danger>"}
    ${'tag with attributes, content, whitespaces'} | ${"<danger  copy-all>alert('hacked');</danger >"}
    ${'opening tag with whitespaces'}              | ${'<danger      >'}
    ${'opening tag with attributes'}               | ${'<danger copy-all>'}
    ${'closing tag with whitespaces'}              | ${'</danger   >'}
  `('Removes unknown $name', ({ str }) => {
  expect(preventCodeInjection(str)).toStrictEqual('');
});

  it.each`
    name              | str
    ${'onclick'}      | ${'<p onclick="alert(\'hacked\')">'}
    ${'onclick'}      | ${'<p onclick=\'alert("hacked")\'>'}
    ${'onmouseenter'} | ${'<p onmouseenter="alert(\'hacked\')">'}
    ${'onmouseleave'} | ${'<p onmouseleave="alert(\'hacked\')">'}
    ${'onblur'}       | ${'<p onblur="alert(\'hacked\')">'}
    ${'onerror'}      | ${'<p onerror="alert(\'hacked\')">'}
    ${'onfocus'}      | ${'<p onfocus="alert(\'hacked\')">'}
    ${'onload'}       | ${'<p onload="alert(\'hacked\')">'}
    ${'onscroll'}     | ${'<p onscroll="alert(\'hacked\')">'}
    ${'class'}        | ${'<p class="ugly">'}
  `('Removes attribute $name', ({ str }) => {
  expect(preventCodeInjection(str)).toStrictEqual('<p>');
});
});
