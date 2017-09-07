export const setPosts = posts => s => (
  s.update('collection', c => c.merge(posts))
);
