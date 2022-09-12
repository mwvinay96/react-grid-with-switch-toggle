export interface Subcategory {
    subcategoryId: number;
    subcategory: string;
    isActive: boolean;
    isEditable: boolean;
}

export interface Category {
    categoryId: number;
    category: string;
    description: string;
    isActive: boolean;
    subcategories: Subcategory[];
}

export interface Setting {
    notification: Category;
}