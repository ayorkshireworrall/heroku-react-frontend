import { useCallback, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './store/actions';
import { Config } from './config'

function App() {
  
  const isLoading = useSelector(state => state.messages.loading)
  const messages = useSelector(state => state.messages.messages)
  const error = useSelector(state => state.messages.error)

  const dispatch = useDispatch();
  const onInitMessages = useCallback(() => dispatch(actions.getMessages()), [dispatch]);

  useEffect(() => {
    onInitMessages();
  }, [onInitMessages])
  
  let display = error ? (
    <p>Error loading messages</p>
  ) : 
  (
    <ul>
      {messages.map(m => {
        return <li>m.message</li>
      })}
    </ul>
  )
  
  return (
    <div className="App">
      <h1>Basic CRUD APP App</h1>
      <h2>Existing Messages</h2>
      {isLoading ? (<p>Loading</p>) : display}
    </div>
  );
}

export default App;
