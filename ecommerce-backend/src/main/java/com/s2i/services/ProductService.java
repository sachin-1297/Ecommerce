package com.s2i.services;

import com.s2i.entity.Product;
import java.util.List;


public interface ProductService {

    List<Product> getALLProducts();

    Product addProduct(Product product);

    Product getProductById(Integer id);

    Product updateProduct(Product product);

    void disableProduct(Integer id);
}
