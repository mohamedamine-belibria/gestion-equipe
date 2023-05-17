import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")



import Project from "@/components/Project";
import State from "@/components/State"; 
import Employee from "@/components/Employee";
import Task from "@/components/Task";
import Tickets from "@/components/Tickets";
import Tasklist from "@/components/Tasklist";
//pageadmin
import Listproductowneradmin from "../src/components/adminpages/Listproductowneradmin";
import Listdevloppeuradmin from "../src/components/adminpages/Listdevloppeuradmin";
import AjouterProductowneradmin from "../src/components/adminpages/AjouterProductowneradmin";
import ModifierProductowneradmin from "../src/components/adminpages/ModifierProductowneradmin";
import SupprimerProductowneradmin from "../src/components/adminpages/SupprimerProductowneradmin";
import AjouterDeveloppeuradmin from "../src/components/adminpages/AjouterDeveloppeuradmin";
import ModifierDeveloppeuradmin from "../src/components/adminpages/ModifierDeveloppeuradmin";
import SupprimerDeveloppeuradmin from "../src/components/adminpages/SupprimerDeveloppeuradmin";
import AjouterProjetadmin from "../src/components/adminpages/AjouterProjetadmin";
import ModifierProjetadmin from "../src/components/adminpages/ModifierProjetadmin";
import SupprimerProjetadmin from "../src/components/adminpages/SupprimerProjetadmin";
import ListeDeProjetsadmin from "../src/components/adminpages/ListeDeProjetsadmin";
import ToutesLesAffectationsadmin from "../src/components/adminpages/ToutesLesAffectationsadmin";
import Affectationadmin from "../src/components/adminpages/Affectationadmin";

import ModifierAffectationadmin from "../src/components/adminpages/ModifierAffectationadmin";
import ProjetTermineadmin from "../src/components/adminpages/ProjetTermineadmin";
import ProjetEnCoursadmin from "../src/components/adminpages/ProjetEnCoursadmin";









const routes = [
  //admin
  {
    path: "/AjouterProductowneradmin",
    name: "AjouterProductowneradmin",
    component: AjouterProductowneradmin,
  },
  {
    path: "/ModifierProductowneradmin",
    name: "ModifierProductowneradmin",
    component: ModifierProductowneradmin,
  },
  {
    path: "/SupprimerProductowneradmin",
    name: "SupprimerProductowneradmin",
    component: SupprimerProductowneradmin,
  },
  {
    path: "/AjouterDeveloppeuradmin",
    name: "AjouterDeveloppeuradmin",
    component: AjouterDeveloppeuradmin,
  },
  {
    path: "/ModifierDeveloppeuradmin",
    name: "ModifierDeveloppeuradmin",
    component: ModifierDeveloppeuradmin,
  },
  {
    path: "/SupprimerDeveloppeuradmin",
    name: "SupprimerDeveloppeuradmin",
    component: SupprimerDeveloppeuradmin,
  },
  {
    path: "/AjouterProjetadmin",
    name: "AjouterProjetadmin",
    component: AjouterProjetadmin,
  },
  {
    path: "/ModifierProjetadmin",
    name: "ModifierProjetadmin",
    component: ModifierProjetadmin,
  },
  {
    path: "/SupprimerProjetadmin",
    name: "SupprimerProjetadmin",
    component: SupprimerProjetadmin,
  },
  {
    path: "/ListeDeProjetsadmin",
    name: "ListeDeProjetsadmin",
    component: ListeDeProjetsadmin,
  },
  {
    path: "/Listproductowneradmin",
    name: "Listproductowneradmin",
    component: Listproductowneradmin,
  },
  {
    path: "/Listdevloppeuradmin",
    name: "Listdevloppeuradmin",
    component: Listdevloppeuradmin,
  },
  {
    path: "/ToutesLesAffectationsadmin",
    name: "ToutesLesAffectationsadmin",
    component: ToutesLesAffectationsadmin,
  },
  {
    path: "/Affectationadmin",
    name: "Affectationadmin",
    component: Affectationadmin,
  },

  {
    path: "/ModifierAffectationadmin",
    name: "ModifierAffectationadmin",
    component: ModifierAffectationadmin,
  },
  {
    path: "/ProjetTermineadmin",
    name: "ProjetTermineadmin",
    component: ProjetTermineadmin,
  },
  {
    path: "/ProjetEnCoursadmin",
    name: "ProjetEnCoursadmin",
    component: ProjetEnCoursadmin,
  },

  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },

  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },

  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },

  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },

  {
    path: "/Project",
    name: "Project",
    component: Project,
  },
  {
    path: "/State",
    name: "State",
    component: State,
  },

  {
    path: "/Employee",
    name: "Employee",
    component: Employee,
  },
  {
    path: "/Employee",
    name: "Employee",
    component: Employee,
  },
  {
    path: "/Task",
    name: "Task",
    component: Task,
  },
  {
    path: "/Tickets",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/Tasklist",
    name: "Tasklist",
    component: Tasklist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;