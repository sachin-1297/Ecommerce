package com.s2i.services;

import com.s2i.entity.Category;
import com.s2i.entity.Product;

import java.util.List;

public interface CategoryService {
    List<Category> getALLCategory();

    Category addCategory(Category category);

    Category getCategoryById(Integer id);

    Category updateCategory(Category category);

    void deleteCategory(Integer id);
}
