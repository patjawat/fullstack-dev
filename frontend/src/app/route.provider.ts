import { eLayoutType, RoutesService } from "@abp/ng.core";

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: "/",
        name: "::Menu:Home",
        iconClass: "fas fa-home",
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: "/book-store",
        name: "::Menu:BookStore",
        iconClass: "fas fa-book",
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: "/books",
        name: "::Menu:Books",
        parentName: "::Menu:BookStore",
        layout: eLayoutType.application,
      },
    ]);
  };
}