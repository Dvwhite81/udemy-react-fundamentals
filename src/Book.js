const Book = ({ book }) => {
  const { author, id, image, title } = book;

  return (
    <article className="book">
      <span className="number"># {id}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>{' '}
    </article>
  );
};

export default Book;
