import React, { Component } from "react";
import SortableTree, { addNodeUnderParent, changeNodeAtPath,removeNodeAtPath}from "react-sortable-tree";
import { connect } from 'react-redux';

let firstNames=[];

class EmpTree extends Component {

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(nextProps.hasOwnProperty("listOfPerson") && Object.keys(nextProps.listOfPerson).length>0){
        var newState=[];
          firstNames=Object.values(nextProps.listOfPerson).map(item=>{
            console.log("itemmm..",item);
              var name=item.fname+ " " +item.role
              console.log("inside map..",name);
              return {title:name}
        });
        console.log("out if..",this.state.treeData);

        if(this.state.treeData.length===1){
          console.log("in if..",this.state.treeData);
          this.setState({treeData:firstNames.slice(0,1)})
     }
       else{
            this.setState({treeData:firstNames});
          }
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
    if(Object.keys(this.props.listOfPerson).length<=0){
      return <div></div>
    }

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
        <h5>Oragnization Tree</h5>
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

        </form>

        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            searchMethod={customSearchMethod}
            searchQuery={searchString}
            generateNodeProps={({ node, path }) => ({
              buttons: [
                <button className="btn btn-link ed-adrm-btn"
                  onClick={() =>
                    this.setState(state => ({
                      treeData: addNodeUnderParent({
                        treeData: state.treeData,
                        parentKey: path[path.length - 1],
                        expandParent: true,
                        getNodeKey,
                        newNode: {
                          title: `${getRandomName().title}`,
                        },
                      }).treeData,
                    }))
                  }
                >
                  <i className="fas fa-plus-circle color-style"></i>
                </button>,
                <button className="btn btn-link"
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
                <i className="fas fa-times"></i>
                </button>,
              ],
            })}
          />
        </div>

        <button className="btn btn-style"
          onClick={() =>
            this.setState(state => ({
              treeData: state.treeData.concat({
                title: `${getRandomName().title}`,
              }),
            }))
          }
        >
          <i className="fas fa-users"></i>          Add more
        </button>
      </div>
    );
  }

}
function mapStateToProps(state){
  return {listOfPerson:state.listOfPerson}
}

export default connect(mapStateToProps)(EmpTree);
