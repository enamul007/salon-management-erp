import { Injectable } from '@angular/core';
import { BaseApiService } from './base-service/base-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryStructuresService extends BaseApiService<any> {
   
  protected readonly endpoint = 'SalaryStructures';     
  
  /**
   * সব স্যালারি স্ট্রাকচার নিয়ে আসার মেথড (GET)
   */
  getAllSalaryStructures(): Observable<any[]> {
    return this.getAll();
  }

  /**
   * নির্দিষ্ট আইডি দিয়ে একটি স্যালারি স্ট্রাকচার নিয়ে আসার মেথড (GET)
   */
  getSalaryStructureById(id: string): Observable<any> {
    return this.getById(id);    
  }

  /**
   * নতুন স্যালারি স্ট্রাকচার তৈরি করার মেথড (POST)
   */
  createSalaryStructure(payload: any): Observable<any> {
    return this.create(payload);
  }

  /**
   * বিদ্যমান স্যালারি স্ট্রাকচার আপডেট করার মেথড (PUT)
   */
  updateSalaryStructure(id: string, payload: any): Observable<any> {
    return this.update(id, payload);
  }

  /**
   * নির্দিষ্ট স্যালারি স্ট্রাকচার মুছে ফেলার মেথড (DELETE)
   */
  deleteSalaryStructure(id: string): Observable<void> {
    return this.delete(id);
  }
}