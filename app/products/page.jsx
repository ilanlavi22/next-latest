import { use } from 'react';

const apiUrl = 'https://product-app-101-server.vercel.app/api/products';

const fetchProducts = async () => {
  const response = await fetch(apiUrl, { cache: 'no-store' });
  // equivalent to using getServerSideProps => without using cache option it will return to getStaticProps

  console.log('---- fetching data -----');
  return response.json();
};

export default function Products() {
  const products = use(fetchProducts());

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
}
