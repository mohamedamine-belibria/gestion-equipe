import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")

import test from "./components/test.vue";






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


//pagesPO

import Affectationdetachemod from "../src/components/popages/Affectationdetachemod";
import Divisiondestachesmod from "../src/components/popages/Divisiondestachesmod";
import ListeDeProjetsmod from "../src/components/popages/ListeDeProjetsmod";
import ModifierAffectationdetachemod from "../src/components/popages/ModifierAffectationdetachemod";
import ProjetEnCoursmod from "../src/components/popages/ProjetEnCoursmod";
import ProjetTerminemod from "../src/components/popages/ProjetTerminemod";
import TacheEnCoursmod from "../src/components/popages/TacheEnCoursmod";
import TacheEnTerminemod from "../src/components/popages/TacheEnTerminemod";
import Affectationtacheprojet from "../src/components/popages/Affectationtacheprojet";
import AjouterDevloppeurpo from "../src/components/popages/AjouterDevloppeurpo";
import ModifierDeveloppeurpo from "../src/components/popages/ModifierDeveloppeurpo";
import Listdevloppeurpo from "../src/components/popages/Listdevloppeurpo";
import SupprimerDeveloppeurpo from "../src/components/popages/SupprimerDeveloppeurpo";






//pageuser

import listedemestache from "../src/components/userpages/listedemestache";
import tachetermineruser from "../src/components/userpages/tachetermineruser";
import tacheEncouruser from "../src/components/userpages/tacheEncouruser";
import listedevloppeur from "../src/components/userpages/listedevloppeur";











const routes = [
  {
    path: "/test",
    name: "test",
    component: test,
  },
  //user
  {
    path: "/tacheEncouruser",
    name: "tacheEncouruser",
    component: tacheEncouruser,
  },
  {
    path: "/tachetermineruser",
    name: "tachetermineruser",
    component: tachetermineruser,
  },
  {
    path: "/listedemestache",
    name: "listedemestache",
    component: listedemestache,
  },
  {
    path: "/listedevloppeur",
    name: "listedevloppeur",
    component: listedevloppeur,
  },
  //PO

  {
    path: "/SupprimerDeveloppeurpo",
    name: "SupprimerDeveloppeurpo",
    component: SupprimerDeveloppeurpo,
  },
  {
    path: "/Listdevloppeurpo",
    name: "Listdevloppeurpo",
    component: Listdevloppeurpo,
  },
  {
    path: "/ModifierDeveloppeurpo",
    name: "ModifierDeveloppeurpo",
    component: ModifierDeveloppeurpo,
  },
  {
    path: "/AjouterDevloppeurpo",
    name: "AjouterDevloppeurpo",
    component: AjouterDevloppeurpo,
  },
  {
    path: "/Affectationtacheprojet",
    name: "Affectationtacheprojet",
    component: Affectationtacheprojet,
  },
  {
    path: "/Affectationdetachemod",
    name: "Affectationdetachemod",
    component: Affectationdetachemod,
  },
  {
    path: "/Divisiondestachesmod",
    name: "Divisiondestachesmod",
    component: Divisiondestachesmod,
  },
  {
    path: "/ListeDeProjetsmod",
    name: "ListeDeProjetsmod",
    component: ListeDeProjetsmod,
  },
  {
    path: "/ModifierAffectationdetachemod",
    name: "ModifierAffectationdetachemod",
    component: ModifierAffectationdetachemod,
  },
  {
    path: "/ProjetEnCoursmod",
    name: "ProjetEnCoursmod",
    component: ProjetEnCoursmod,
  },
  {
    path: "/ProjetTerminemod",
    name: "ProjetTerminemod",
    component: ProjetTerminemod,
  },
  {
    path: "/TacheEnCoursmod",
    name: "TacheEnCoursmod",
    component: TacheEnCoursmod,
  },
  {
    path: "/TacheEnTerminemod",
    name: "TacheEnTerminemod",
    component: TacheEnTerminemod,
  },

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