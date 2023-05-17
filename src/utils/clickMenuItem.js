import { navigate } from 'gatsby';
import scroll from './scroll';

export default (target, link) => {
  const IS_MAIN_PAGE = window.location.pathname === '/';

  if (link) {
    navigate(link);
    return;
  }
  if (IS_MAIN_PAGE) {
    scroll(target);
  } else {
    navigate(`/?target=${target}`);
  }
};
