const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path:"/termi",
    component: () => import("src/pages/terminos.vue"),
  },
  {
    path: "/login",
    component: () => import("src/components/auth/LoginForm.vue"),
  },
  {
    path: "/Register",
    component: () =>
      import("components/RegistroCoachEmpredor/InterfazDeRegistro.vue"),
  },
  {
    path: "/RegisterEmprendedor",
    component: () => import("components/auth/RegisterForm.vue"),
  },
  {
    path: "/RegisterCoach",
    component: () => import("components/auth/RegisterFormCoach.vue"),
  },

  {
    path: "/Servicios",
    component: () => import("components/Servicios.vue"),
  },
  {
    path: "/Inicio",
    component: () => import("layouts/MainLayout.vue"),
  },
<<<<<<< HEAD

=======
  {
    path: "/QuienesSomos",
    component: () => import("components/QuienesSomos.vue"),
  },
  
>>>>>>> 15222ddffc6948b6e26613095a872c3b5c45e708
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
