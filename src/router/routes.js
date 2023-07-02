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

  {
    path: "/ElecCoach/:idServicio",
    name: "ElecCoach",
    component: () => import("components/ElecCoach.vue"),
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
  {
    path: "/planPagos",
    component: () => import("src/components/PlanPagos.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/MarketingService",
    component: () => import("pages/MarketingService.vue"),
  },
  {
    path: "/moduloPago",
    component: () => import("pages/modulodePago.vue"),
  },
];

export default routes;
