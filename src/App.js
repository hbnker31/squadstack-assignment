import "./styles.css";
import Home from './HomePage'
import SideBar from "./components/Sidebar";
import Styles from './index.module.scss'
export default function App() {
  return (
    <div className={Styles.App}>
      <SideBar />
      <Home />

    </div>
  );
}
