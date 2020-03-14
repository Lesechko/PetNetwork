import state, {onAddPost, apdatePost} from './components/redux/state';
import {rerenderEnrieTree} from './render';
import * as serviceWorker from './serviceWorker';

rerenderEnrieTree(state, onAddPost, apdatePost);
serviceWorker.unregister();
