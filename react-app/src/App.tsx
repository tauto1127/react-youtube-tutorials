import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ];
  //<>一つの要素しか返せない (React.createElement('div'))
  //とりあえず一つの要素で返せればいいから、divでも<>だけでもいい。
   return <ListGroup items={items} heading="Cities"/>;
}

export default App;