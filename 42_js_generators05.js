// nice example
// symbol iterator is a tool that teaches objects how to respond to the 'for of' loop
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  //note: array helpers(map, etc) don't work in gens
  //note this new syntax
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
  	}
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post', children);

const values = [];
for (let value of tree) {
  values.push(value);
}
values;
