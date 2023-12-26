


## React

### condition to react attributes

var condition = true;

```
return (
  <Button {...(condition ? {bsStyle: 'success'} : {})} />
);

or

return (
  <Button bsStyle={condition ? 'success' : undefined} />
);

or

var props = {
  value: 'foo',
  ...(condition && { disabled: true })
};

var component = <div {...props} />;

```

### clsx

```
import clsx from 'clsx';

// Strings (variadic)
clsx('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
clsx({ foo:true, bar:false, baz:isTrue() });
//=> 'foo baz'

// Objects (variadic)
clsx({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
//=> 'foo --foobar'

// Arrays
clsx(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
clsx('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'

```