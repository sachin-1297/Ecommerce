package com.s2i.serviceImpl;

import com.s2i.entity.Product;
import com.s2i.repository.ProductRepository;
import com.s2i.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getALLProducts() {
        return (List<Product>) productRepository.findAll();
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        return optionalProduct.get();
    }

    @Override
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void disableProduct(Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);

        // old method

        /*if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setEnabled(false);
            productRepository.save(product);
        }
        else {
            throw new RuntimeException("data with this" + id + "not found");
        }*/

        // Java 8 method
        Product p  = optionalProduct.orElseThrow(() ->new RuntimeException("data with this" + id + "not found"));
        p.setEnabled(false);
        productRepository.save(p);
    }
}
