import type { Router } from "vue-router";


export function createPageJump(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (from.path.indexOf("about")) {
      next("/login?redirect=" + to.path);
    }
  }
};
