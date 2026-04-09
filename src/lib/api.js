const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return await res.json();
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return [];
  }
}
