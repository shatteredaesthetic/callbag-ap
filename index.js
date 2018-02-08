const ap = x => source => (start, sink) => {
  if (start !== 0) return;
  source(0, (t, d) => {
    sink(t, t === 1 ? d(x) : d)
  });
};

module.exports = ap;