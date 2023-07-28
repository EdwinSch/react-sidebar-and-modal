import { useGlobalContext } from "../context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return <p>home component</p>;
};

export default Home;
