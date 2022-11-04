import PostImages from './images';

async function getSinglePost(id) {
  const res = await fetch(
    `https://vehiculum-coding-challenge.herokuapp.com/api/details/${id}`,
    { cache: 'no-store' }
  );
  return res.json();
}

export default async function productSingle({ params: { id } }) {
  const singleProduct = await getSinglePost(id);
  const { model, color, images } = singleProduct;

  return (
    <div className='page'>
      <h5>Product detail page</h5>
      <p>The product model: {model}</p>
      <p>Color: {color}</p>
      <PostImages images={images}></PostImages>
    </div>
  );
}
