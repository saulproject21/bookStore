import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import { numberFormat } from "@/Libs/Helper";
import Container from "@/Components/Container";
import Button from "@/Components/Button";

export default function Show({ product }) {
    return (
        <div>
            <Container>
                <Head title={product.name} />
                <div className="flex gap-10">
                    <div className="w-1/3">
                        <img
                            className="w-full rounded-lg"
                            src={product.gambar_produk}
                            alt=""
                        />
                    </div>
                    <div className="w-2/3 min-h-full flex flex-col justify-between">
                        <Link
                            className="text-sm font-semibold px-2 py-1 inline-flex bg-blue-500 rounded w-fit"
                            href={`/product?category=${product.category.nama_kategori}`}
                        >
                            {product.category.nama_kategori}
                        </Link>
                        <h1 className="text-3xl font-semibold">
                            {product.nama_produk}
                        </h1>
                        <div className="leading-relaxed text-gray-600 my-4">
                            {product.deskripsi}
                        </div>
                        <div className="font-semibold text-4xl">
                            <sup>Rp.</sup>
                            {numberFormat(product.harga)}
                        </div>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;