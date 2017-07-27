function curry (f) {
	var arity = f.length;
	var totalArgs = [];

	return function traverse (...args) {
		totalArgs = totalArgs.concat(args);
		arity -= args.length;
		if(arity <= 0) {
			return f.apply(this, totalArgs);
		} else {
			return traverse;
		}
	};
}

function pipe(...fns) {
	return function (...args) {
	  var init = fns.shift().apply(this, args);
		return fns.reduce((acc, cur) => {
			return cur.call(this, acc);
		}, init);
	};
}

const f = {
	curry,
	pipe,
};

export {curry, pipe};
export default f;