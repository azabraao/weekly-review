import "./styles/global.scss";

interface AppProps {
  name: string;
}

const App = ({ name }: AppProps) => {
  return <h1>Hello {name}</h1>;
};

export default App;
