import React, { Component } from "react";
import SortableTree, { addNodeUnderParent, changeNodeAtPath,removeNodeAtPath}from "react-sortable-tree";
import { connect } from 'react-redux';

let firstNames=[];

class EmpTree extends Component {

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(nextProps.hasOwnProperty("listOfPerson") && Object.keys(nextProps.listOfPerson).length>0){

          firstNames=Object.values(nextProps.listOfPerson).map(item=>{
            console.log("itemmm..",item);
              var name=item.fname+ " " +item.role
              console.log("inside map..",name);
              return {title:name}
        });
        this.setState({treeData:firstNames})
    }
    console.log("firstNames..",firstNames);
  }
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [],
    };
  }

  render() {
    if(this.state.treeData.length<=0){
      return <div></div>
    }
    console.log("inside emptree..",this.props.listOfPerson);
    const { searchString, searchFocusIndex, searchFoundCount } = this.state;
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const getRandomName = () =>
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const customSearchMethod = ({ node, searchQuery }) =>
      searchQuery &&
      node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
        searchFocusIndex !== null
          ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
          : searchFoundCount - 1,
      });

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
        searchFocusIndex !== null
          ? (searchFocusIndex + 1) % searchFoundCount
          : 0,
      });
    return (
      <div>
        <h2>Oragnization Tree</h2>
        <form
          style={{ display: 'inline-block' }}
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <input
            id="find-box"
            type="text"
            placeholder="Search..."
            style={{ fontSize: '1rem' }}
            value={searchString}
            onChange={event =>
              this.setState({ searchString: event.target.value })
            }
          />
          <button
            type="button"
            disabled={!searchFoundCount}
            onClick={selectPrevMatch}
          >
            &lt;
          </button>

          <button
            type="submit"
            disabled={!searchFoundCount}
            onClick={selectNextMatch}
          >
            &gt;
          </button>




          <span>
            &nbsp;
            {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
            &nbsp;/&nbsp;
            {searchFoundCount || 0}
          </span>
        </form>

        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            searchMethod={customSearchMethod}
            searchQuery={searchString}
            generateNodeProps={({ node, path }) => ({
              buttons: [
                <button
                  onClick={() =>
                    this.setState(state => ({
                      treeData: addNodeUnderParent({
                        treeData: state.treeData,
                        parentKey: path[path.length - 1],
                        expandParent: true,
                        getNodeKey,
                        newNode: {
                          title: `${this.props.listOfPerson["1"]["fname"]}
                           ${this.props.listOfPerson["1"]["lname"]}`,
                        },
                      }).treeData,
                    }))
                  }
                >
                  Add Child
                </button>,
                <button
                  onClick={() =>
                    this.setState(state => ({
                      treeData: removeNodeAtPath({
                        treeData: state.treeData,
                        path,
                        getNodeKey,
                      }),
                    }))
                  }
                >
                  Remove
                </button>,
              ],
            })}
          />
        </div>

        <button
          onClick={() =>
            this.setState(state => ({
              treeData: state.treeData.concat({
                title: `${getRandomName()} ${getRandomName()}sson`,
              }),
            }))
          }
        >
          Add more
        </button>
      </div>
    );
  }

}
function mapStateToProps(state){
  return {listOfPerson:state.listOfPerson}
}

export default connect(mapStateToProps)(EmpTree);
