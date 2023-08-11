import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "@/views/user/Index.vue";
import UserCreate from "../views/user/Create.vue";
import Tiket from "../views/Tiket.vue"
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";
import FilterPageCategory from "../views/FilterPageCategory.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
        meta: { requiresLogin: true },
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component: UserCreate,
        meta: { requiresLogin: true },
    },
    {
        path: "/tiket",
        name: "Tiket",
        component: Tiket,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/category/:category",
        name: "FilterCategory",
        component: FilterPageCategory,
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); // redirect to home 
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login"); 
    } else {
        next();
    }
});

export default router; 