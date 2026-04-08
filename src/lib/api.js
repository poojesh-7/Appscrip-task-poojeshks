export const runtime = "edge";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts() {
  try {
    if (!API_URL) {
      throw new Error("API URL is undefined");
    }

    console.log("API_URL:", API_URL);

    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return await res.json();
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return [];
  }
}
