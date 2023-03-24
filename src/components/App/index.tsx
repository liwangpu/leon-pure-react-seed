import styles from './index.module.scss';
import { memo, useMemo } from 'react';
import { SimpleNavsPage, INavItem } from '../SimpleNavsPage';

const App: React.FC = memo(() => {

  const routes = useMemo<Array<INavItem>>(() => ([
    {
      title: 'Home',
      path: '/app/home',
    },
    {
      title: 'Test',
      path: '/app/test',
    }
  ]), []);

  return (
    <div className={styles['app']}>
      <SimpleNavsPage title='学习里程' routes={routes} />
    </div>
  );
});

export default App;