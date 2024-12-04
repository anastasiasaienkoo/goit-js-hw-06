class StringBuilder {
  #value;
  constructor(initialValue){
    this.#value = initialValue;
  }

  getValue(){
    return this.#value;
  }

  padEnd(str){
    Array.from(this.#value).push(str);
  }

  padStart(str){
    Array.from(this.#value).unshift(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="