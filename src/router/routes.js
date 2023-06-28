const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        path: "",
        component: () => import("components/HistoriaExito.vue"),
        path: "",
        component: () => import("components/Servicios.vue"),
      },
    ],
  },
  {
    path: "/HistoriaExito.vue",
    component: () => import("components/HistoriaExito.vue"),
  },
  {
    path: "/termi",
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
    path: "/historias",
    component: () => import("components/historias.vue"),
  },

  {
    path: "/Servicios",
    component: () => import("components/Servicios.vue"),
  },
  {
    path: "/Inicio",
    component: () => import("layouts/MainLayout.vue"),
  },

  {
    path: "/QuienesSomos",
    component: () => import("components/QuienesSomos.vue"),
  },
  {
    path: "/Comunidad",
    component: () => import("components/Comunidad.vue"),
  },

  // Zona de tests
  {
    path: "/intCoach",
    component: () => import("src/components/interfaces/InterfazCoach.vue"),
  },

  {
    path: "/intEmprendedor",
    component: () =>
      import("src/components/interfaces/InterfazEmprendedor.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
