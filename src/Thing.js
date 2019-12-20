class App extends Component {

    render() {
      return (
        <div className="content">
          <div className="container">
            <section className="section">
              <ul>
                {this.state.list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )
    }
  }