import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import categoriesReducer, {
  CategoriesState,
} from "./categories/categories.reducer";
import emojiesReducer, { EmojiesState } from "./emojies/emojies.reducer";
import menuReducer, { MenuState } from "./menu/menu.reducer";
import postsReducer, { PostsState } from "./posts/posts.reducer";
import searchInputReducer, {
  SearchInputState,
} from "./search-input/search-input.reducer";
import signInReducer, { SignInState } from "./signin/signin.reducer";
import usersReducer, { UsersState } from "./users/users.reducer";

const middlewares: any[] = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export interface State {
  signIn: SignInState;
  searchInput: SearchInputState;
  menu: MenuState;
  posts: PostsState;
  emojies: EmojiesState;
  users: UsersState;
  categories: CategoriesState;
}

const store: Store = createStore(
  combineReducers({
    signIn: signInReducer,
    searchInput: searchInputReducer,
    menu: menuReducer,
    posts: postsReducer,
    emojies: emojiesReducer,
    users: usersReducer,
    categories: categoriesReducer,
  }),
  applyMiddleware(...middlewares)
);

export default store;
