export interface JsonFormValidators {
  min: number;
  max: number;
  required: boolean;
  requiredTrue: boolean;
  email: boolean;
  minLength: boolean;
  maxLength: boolean;
  pattern: string;
  nullValidator: boolean;
}

export interface JsonFormControls {
  id: string;
  formField: boolean;
  name: string;
  label: string;
  value: string;
  type: any;
  placeholder: string;
  hide: boolean;
  tooltip: string;
  iconLink: string;
  iconType: any;
  options: commonOptions[];
  format: string;
  validators: JsonFormValidators;
  showPagination:boolean
}

export interface commonOptions {
  name: string;
  value: string;
  iconType: string;
  icon: string;
  label: string;
  type: any;
  hide: string;
  sort: boolean;
  showLink: boolean;
  suffLink: string;
  prefLink: string;
  sortKey: string;
  popconfirm:boolean;
}

export interface JsonForm {
  controls: JsonFormControls[];
}

export interface pagination {
  pageIndex: number;
  pageSize: number;
}

export interface sort {
  key: any;
  value: any;
}
