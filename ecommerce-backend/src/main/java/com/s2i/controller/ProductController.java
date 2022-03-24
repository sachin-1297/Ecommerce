package com.s2i.controller;

import com.s2i.entity.Product;
import com.s2i.helper.FileUploadHelper;
import com.s2i.services.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/product")
public class ProductController {

    private final static Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductService productService;

    @Autowired
    private FileUploadHelper fileUploadHelper;

    @GetMapping("/getAll")
    public ResponseEntity<List<Product>> getAllProducts(){
        logger.info("Requested for all the Products");
        List<Product> products = productService.getALLProducts();
        if(products.size() <= 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(products));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestBody Product product, @RequestParam("file")MultipartFile file) throws IOException {
        logger.info("Requested to add the product");
        if (file.isEmpty()){
            logger.info("File is empty");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File is Empty");
        }
        if (!file.getContentType().equals("image/jpeg")){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only JPEG content type are allowed");
        }
        /* else {
            product.setImageUrl(file.getOriginalFilename());
            File saveFile = new ClassPathResource("static/img").getFile();
            Path path = Paths.get(saveFile.getAbsolutePath()+File.separator+file.getOriginalFilename());
            Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);
        }*/
        Product addedProduct = productService.addProduct(product);
        return new ResponseEntity<>( addedProduct, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable("id") Integer id){
        logger.info("Requested for product of id: {}", id);
        Product product = productService.getProductById(id);
        return new ResponseEntity<>( product, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(@RequestBody Product product){
        logger.info("Requested for updating the product : {}", product);
        Product updatedProduct = productService.updateProduct(product);
        return new ResponseEntity<>( updatedProduct, HttpStatus.OK);
    }

    @PutMapping("/disable/{id}")
    public ResponseEntity<?> disableProduct(@PathVariable("id") Integer id){
        logger.info("Requested for disabling product of id: {}", id);
        productService.disableProduct(id);
        return new ResponseEntity<>( "Product deleted successfully", HttpStatus.OK);
    }

}
