import axios from "axios";

export const getAllTransactions = async () => {
  try {
    const response = await axios.get(
      "https://int-backend.vercel.app/transactions",
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
