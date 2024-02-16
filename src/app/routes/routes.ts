import { Router } from "express";
import { ProductRoutes } from "../modules/Product/product.route";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { SalesRoutes } from "../modules/Sales/sales.route";
import { CouponRoutes } from "../modules/Cupon/coupon.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/sales",
    route: SalesRoutes,
  },
  {
    path: "/coupon",
    route: CouponRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
