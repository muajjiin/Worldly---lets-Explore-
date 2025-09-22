import{Outlet,redirect} from 'react-router'
// import{SidebarComponent} from '@syncfusion/ej2-react-navigations'
 import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

