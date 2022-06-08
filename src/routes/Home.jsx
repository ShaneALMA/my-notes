import RequireAuth from '../components/RequireAuth'

const Home = () => {
  
  return (
    <RequireAuth>
      <h1>
        Home
      </h1>
    </RequireAuth>
  )
}

export default Home
