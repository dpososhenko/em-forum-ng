import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoryLevel} from '../category.interface';

const categoriesUrl = '/api/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(categoriesUrl);
  }

  getCollectionByLevel(level: CategoryLevel) {
    return this.http.get(`${categoriesUrl}?level=${level}`);
  }

  getCollectionByParent(parent: string) {
    return this.http.get(`${categoriesUrl}?parent=${parent}`);
  }
}
