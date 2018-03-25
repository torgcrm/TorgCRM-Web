import {BaseModel} from './BaseModel';

export class SimplePage extends BaseModel {
  title: string;
  description: string;
  keywords: string;
  slug: string;
}
