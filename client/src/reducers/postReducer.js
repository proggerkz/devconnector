import { GET_ERRORS } from "../actions/types";
const initialState = {
  posts: [],
  post: {},
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
