import axios from 'axios';

// const fetchedData = (callback) => {
//   fetch('data.json')
//     .then(resp => {
//        // you'll need to supply the function that checks the status here
//        if ((resp.status)) {
//          return resp.json();
//        } else {
//          throw new Error(`Got back ${resp.status}`);
//        }
//     }).then(data => {
//       callback(data);
//     }).catch(err => {
//       console.log(err)
//     });
// }

// export default fetchedData;

export function fetchArticleDetails() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/19dtxc")
      .then(({ data }) => {
      dispatch(setArticleDetails(data));
    });
  };
}
