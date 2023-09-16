function App() {
  //<>一つの要素しか返せない (React.createElement('div'))
  //とりあえず一つの要素で返せればいいから、divでも<>だけでもいい。
   return<>
   <h1>List</h1>     
   <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  </>
}

export default App;