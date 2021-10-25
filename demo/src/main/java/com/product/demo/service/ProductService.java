package com.product.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.demo.model.Category;
import com.product.demo.model.Product;
import com.product.demo.repository.CategoryRepository;
import com.product.demo.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<Category> getAllCategories() {
		return categoryRepository.findAll();
	}
	
	public List<Product> getAllProducts(Integer categoryId) {
		return productRepository.findAllByCategoryId(categoryId);
	}
}
