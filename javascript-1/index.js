const curry = (func) => {
    const curriedFunc = (...args) => {
      return (arg) => {
        if (!arg) {
          return args.reduce((acc, current) => {
            return func.call(func, acc, current);
          }, 0);
        }
        return curriedFunc(...args, arg);
      };
    };
    return curriedFunc();
  };
  
  const sum = curry((x, y) => x + y);
  console.log(sum(1)(2)(3)(4)(5)());