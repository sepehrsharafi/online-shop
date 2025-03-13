import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getUser() {
  try {
    const response = await axios.get("https://fakestoreapi.com/users/1");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of an error
  }
}
