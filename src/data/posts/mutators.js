export const setPosts = posts => s => (
  s.update('collection', c => c.merge(posts))
);

export const setPost = post => s => (
  s.set('detail', post)
);
