import React, { Component } from "react";
import $ from 'jquery';
import SortableTree, { addNodeUnderParent,removeNodeAtPath}from "react-sortable-tree";
import { connect } from 'react-redux';

let firstNames=[];

class EmpTree extends Component {

  componentWillReceiveProps(nextProps){
    if(nextProps.hasOwnProperty("listOfPerson") && Object.keys(nextProps.listOfPerson).length>0){
          firstNames=Object.values(nextProps.listOfPerson).map(item=>{
              var name=item.fname+ " " +item.role
              return {title:name}
        });

       // else{
       //      this.setState({treeData:firstNames});
       //    }
    }
    else{
      firstNames=[];
    }
    this.setState({treeData:firstNames});
    if(this.state.treeData.length===1){
      this.setState({treeData:firstNames.slice(0,1)})
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      treeData: [],
    };
  }

  render() {


    const { searchString } = this.state;
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const getRandomName = () =>{
      if(firstNames.length>0){
          return firstNames[Math.floor(Math.random() * firstNames.length)];
        }
        return '';
      }
      const addMore=()=>{
        if(firstNames.length>0){
          this.setState(state => ({
            treeData: state.treeData.concat({
              title: `${getRandomName().title}`,
            }),
          }))
        }
        else{
          $('#alert-div').append('<div class="alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button>Add Employee to proceed.</div>')
        }
      }
    const customSearchMethod = ({ node, searchQuery }) =>
      searchQuery &&
      node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;

    return (
      <div>
        <div className="border-bottom title-style">
              <h5>Oragnization Tree</h5>
        </div>
        <div className="form-group">
            <form
              style={{ display: 'inline-block' }}
              onSubmit={event => {
                event.preventDefault();
              }}
            >
              <input className="form-control"
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
          </div>
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
        <div id="alert-div"></div>

        <button className="btn btn-style"
          onClick={() =>addMore()}>
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
