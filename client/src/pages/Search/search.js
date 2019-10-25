import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Container } from "../../components/grid";
import { Input, FormBtn } from "../../components/form";
import Navbar from "../../components/navbar";
import Jumbotron from "../../components/jumbotron";

class Search extends Component {
  state = {
    title: "",
    toResults: false,
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {

      const title = this.state.title.trim();

      API.getNewBooks(title)
        .then(res => {

          console.log(res.data.items);

          this.setState({
            toResults: true,
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.toResults) {
      return <Redirect to={{
        pathname: "/results",
        data: { results: this.state.results }
      }} />
    }
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Container>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Book Title"
              placeholder="Search Book Title (required)"
            />
            <FormBtn         
              onClick={this.handleFormSubmit}
              className="btn btn-info"
            >
              Search
            </FormBtn>
          </form>
        </Container>
      </div>
    );
  }
}

export default Search;