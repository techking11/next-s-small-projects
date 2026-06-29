export async function getAllData() {
  const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error("Error in fetching all data");
  }
  const data = await res.json();
  return data;
}

export const getData = async function (id, setBlog) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Error in fetch single data')
  }
  const data = await res.json();
  setBlog(data);
}