<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->select(
                'id',
                'nama_produk',
                'slug',
                'harga',
                'gambar_produk',
                'kategori_id'
            )->paginate(12);
        // return ProductResource::collection($products);
        return inertia('Products/Index', [
            'products' => ProductResource::collection($products),
        ]);
    }
}