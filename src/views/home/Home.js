import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user-email");
    history.push(`/`);
  }

  return (
    <form onSubmit={handleLogout}>
      <h1>Home</h1>
      <button type="submit">Sair</button>
    </form>
  );
}

export default Home;