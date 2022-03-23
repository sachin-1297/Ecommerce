package com.s2i.controller;

import com.s2i.entity.Category;
import com.s2i.entity.Product;
import com.s2i.services.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController {

    private final static Logger logger = LoggerFactory.getLogger(CategoryController.class);

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Category>> getAllCategories(){
        logger.info("Requested for all the categories");
        List<Category> category = categoryService.getALLCategory();
        if(category.size() <= 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(category));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        logger.info("Requested to add the category");
        Category addedCategory = categoryService.addCategory(category);
        return new ResponseEntity<>( addedCategory, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getCategory(@PathVariable("id") Integer id){
        logger.info("Requested for category of id: {}", id);
        Category category = categoryService.getCategoryById(id);
        return new ResponseEntity<>( category, HttpStatus.OK);
    }
}
