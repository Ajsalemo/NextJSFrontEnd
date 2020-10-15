import { getAllCarMarkdown, getAllCarMarkdownIds } from '../../lib/cars'

export default function Cars({ carData }) {
  return (
      <div>
          <p>{carData.title}</p>
          <p>{carData.type}</p>
          <p>{carData.model}</p>
      </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllCarMarkdownIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const carData = getAllCarMarkdown(params.id)
    return {
      props: {
        carData
      }
    }
}
