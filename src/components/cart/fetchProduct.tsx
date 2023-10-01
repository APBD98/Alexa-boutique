import axios from "axios";
export const FetchProduct = async (productID:any) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`); // Replace with your actual list product endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
  
}
