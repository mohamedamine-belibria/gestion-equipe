import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")






import Task from "@/components/Task";

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


import ListeDeProjetsadmin from "../src/components/adminpages/ListeDeProjetsadmin";

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
    path: "/Task",
    name: "Task",
    component: Task,
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