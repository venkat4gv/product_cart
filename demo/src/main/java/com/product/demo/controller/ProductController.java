package com.product.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.product.demo.model.Category;
import com.product.demo.model.Product;
import com.product.demo.service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/api/categories")
	public List<Category> getAllCategories() {
		return productService.getAllCategories();
	}
	
	@GetMapping("/api/products/{categoryId}")
	public List<Product> getAllProducts(@PathVariable("categoryId") Integer categoryId) {
		return productService.getAllProducts(categoryId);
	}

}
