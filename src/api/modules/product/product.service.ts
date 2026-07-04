import { IProduct } from './product.model';
import { ProductRepository, productRepository } from './product.repository';

class ProductService {
  private repository: ProductRepository;

  constructor(repository = productRepository) {
    this.repository = repository;
  }

  getAllProducts = async (): Promise<IProduct[]> => {
    return this.repository.getAllProducts();
  };

  getProductById = async (id: number): Promise<IProduct | null> => {
    return this.repository.getProductById({ id });
  };
}

export const productService = new ProductService();
