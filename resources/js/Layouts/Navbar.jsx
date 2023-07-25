import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <nav className="bg-gray-800 py-2 border-b shadow-md">
            <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Produk</NavLink>
                        {auth.user ? (
                            <>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <NavLink>{auth.user.name}</NavLink>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href="/">
                                            Dashboard
                                        </Dropdown.Link>
                                        <Dropdown.Link href="/profile">
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link href="/cart">
                                            Keranjang
                                        </Dropdown.Link>
                                        <Dropdown.Link href="/history">
                                            History
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href="/logout"
                                            method="post"
                                        >
                                            Logout
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </>
                        ) : (
                            <>
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}