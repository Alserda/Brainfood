const applyFn = (state, fn) => fn(state);

const pipe = (fns, state) => (
  state.withMutations(s => fns.reduce(applyFn, s))
);

export default pipe;
