import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  // наследуемся от родит класса, иначе по умолчанию наследование идет
  // constructor(props) {
  //   super(props);
  // }
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get("https://social-network.samuraijs.com/api/1.0/users")
  //       .then((response) => {
  //         this.props.setUsers(response.data.items);
  //       });
  //   }
  // };
  // ________________________________________________________________________________
  // до появления thunk
  //   console.log("componentDidMount");
  //   this.props.toggleIsFetching(true);

  //   usersAPI
  //     .getUsers(this.props.currentPage, this.props.pageSize)
  //     .then((data) => {
  //       this.props.toggleIsFetching(false);
  //       let userList = data.items;
  //       let totalUsersCount = data.totalCount;
  //       this.props.setUsers(userList);
  //       this.props.setTotalUsersCount(totalUsersCount);
  //       // console.log("componentDidMount", response);
  //       // console.log("data", data);
  //     });
  // }
  onPageChanged = (pageNumberEvent) => {
    this.props.getUsers(pageNumberEvent, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(pageNumberEvent);
    // usersAPI.getUsers(pageNumberEvent, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  console.log("UsersContainer", state);
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
let mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
};
// export default withAuthRedirect(
//   connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
// );
export default compose(
  // withAuthRedirect, // добавляем защиту аутентификации
  connect(mapStateToProps, mapDispatchToProps)
)(UsersAPIComponent);

// let withRedirect = withAuthRedirect(UsersAPIComponent);
// export default connect(mapStateToProps, mapDispatchToProps)(withRedirect);

// let mapDispatchToProps = (dispatch = null) => {
//   return {
//     follow: (userId) => {dispatch(followAC(userId));},
//     unfollow: (userId) => {dispatch(unfollowAC(userId));},
//     setUsers: (users) => {dispatch(setUsersAC(users));},
//     setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage));},
//     setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountAC(totalUsersCount));},
//     toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching));},
//   };};
// ------------------->
// let mapDispatchToProps = {
//   follow: followAC,
//   unfollow: unfollowAC,
//   setUsers: setUsersAC,
//   setCurrentPage: setCurrentPageAC,
//   setTotalUsersCount: setTotalUsersCountAC,
//   toggleIsFetching: toggleIsFetchingAC,
// };
