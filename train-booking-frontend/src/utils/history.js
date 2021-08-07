import { createBrowserHistory } from 'history';

let newHistory = () => {
    try {
        const xhr = new XMLHttpRequest();
        xhr.abort();
    } catch (error) { }
    return createBrowserHistory();
}
export const history = newHistory();

// export default class YourBrowserRouter extends BrowserRouter {
//     history;
// }
