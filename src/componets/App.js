import React from "react";
import { Route, Switch } from "react-router-dom";

import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
