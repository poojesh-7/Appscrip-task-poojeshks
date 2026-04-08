const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getProducts() {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
