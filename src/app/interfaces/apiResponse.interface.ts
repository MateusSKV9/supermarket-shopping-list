import { Product } from "./product.interface";

interface ApiResponse {
    users: Array<{ id: number; name: string; email: string }>;
    shoppingList: Array<Product>;
  }