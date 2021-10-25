import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ProductServices {

    httpHeaders: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders.append('Content-Type', 'application/json');
    }

    getAllCategories() {
        return this.httpClient.get("http://localhost:8080/api/categories", {'headers': this.httpHeaders});
    }

    getProducts(category: string) {
        return this.httpClient.get("http://localhost:8080/api/products/"+category, {'headers': this.httpHeaders});
    }
}