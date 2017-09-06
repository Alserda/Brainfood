export const setPosts = posts => s => {
  console.log('posts: ', posts);
  console.log('state? :', s);
  return (
    s.update('collection', c => c.merge(posts))
  )
};
